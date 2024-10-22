import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { randomUUID } from "crypto";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}


//@Controller('users')
@Controller()
export class UserController {
  constructor() {}

  // http://localhost:3000/users/2/pedro
  @Get('/users/:id/:name')
  findById(@Param("id") id: string, @Param("name") name: string) {
    return `Usuario encontrado por Id: ${JSON.stringify(id)} e Nome: ${JSON.stringify(name)}`;
  }

  // http://localhost:3000/users/findAllByPage?p=10&r=1000
  @Get('/users/findAllByPage')
  findAllByPage(@Query("p") page: number, @Query("r") limit: number) {
    return `Retornando ${JSON.stringify(page)} de ${JSON.stringify(limit)}`;
  }

  // http://localhost:3000/users/create
  // {
  //   "name": "teste nome",
  //   "email": "teste@email.com",
  //   "password": "12345678"
  // }
  @Post('/users/create')
  create(@Body() body: User) {
    return {
      ...body,
      id: randomUUID()
    }
  }
}