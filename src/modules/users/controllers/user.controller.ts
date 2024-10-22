import { CreateUserService } from './../services/create-user.service';
import { Body, Controller, Post } from "@nestjs/common";
import { UserDTO } from '../dto/user.dto';


@Controller('/users')
export class UserController {

  constructor(private createUserService: CreateUserService) {}

  @Post()
  async create(@Body() body: UserDTO) {
    return await this.createUserService.execute(body);
  }
}