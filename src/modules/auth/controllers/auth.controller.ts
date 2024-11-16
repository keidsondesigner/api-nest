import { Body, Controller, Post } from "@nestjs/common";
import { LoginService } from '../services/login.service';
import { UserDTO } from "../dto/user.dto";


@Controller('/auth')
export class AuthController {

  constructor(private registerService: LoginService) {}

  @Post('/register')
  async register(@Body() body: UserDTO) {
    const token = await this.registerService.execute(body);
    return token;
  }
}