import { CreateUserService } from './../services/create-user.service';
import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { UserDTO } from '../dto/user.dto';
import { CreateUserValidationPipe } from '../pipe/create-user.validation.pipe';


@Controller('/users')
export class UserController {

  constructor(private createUserService: CreateUserService) {}

  @Post()
  @UsePipes(new CreateUserValidationPipe)
  async create(@Body() body: UserDTO) {
    return await this.createUserService.execute(body);
  }
}