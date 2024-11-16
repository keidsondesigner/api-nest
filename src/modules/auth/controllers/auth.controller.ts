import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { LoginService } from '../services/login.service';
import { UserDTO } from "../dto/user.dto";
import { RegisterUserService } from "src/modules/auth/services/register-user.service";
import { CreateUserValidationPipe } from "../pipe/create-user.validation.pipe";
import { RegisterUserDTO } from "../dto/register-user.dto";


@Controller('/auth')
export class AuthController {

  constructor(
    private loginService: LoginService,
    private registerUserService: RegisterUserService
  ) {}

  @Post('/login')
  async login(@Body() body: UserDTO) {
    const token = await this.loginService.execute(body);
    return token;
  }

  @Post('/register')
  @UsePipes(new CreateUserValidationPipe)
  async create(@Body() body: RegisterUserDTO) {
    return await this.registerUserService.execute(body);
  }
}