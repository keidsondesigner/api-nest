import { Body, Controller, Post } from "@nestjs/common";
import { LoginService } from '../services/login.service';
import { UserDTO } from "../dto/user.dto";


@Controller('/auth')
export class AuthController {

  constructor(private loginService: LoginService) {}

  @Post('/login')
  async login(@Body() body: UserDTO) {
    const token = await this.loginService.execute(body);
    return token;
  }
}