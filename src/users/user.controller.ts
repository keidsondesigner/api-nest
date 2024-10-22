import { Controller, Get, Param } from "@nestjs/common";

//@Controller('users')
@Controller()
export class UserController {
  constructor() {}

  // http://localhost:3000/users/2/pedro
  @Get('/users/:id/:name')
  findById(@Param("id") id: string, @Param("name") name: string) {
    return `Usuario encontrado por Id: ${JSON.stringify(id)} e Nome: ${JSON.stringify(name)}`;
  }
}