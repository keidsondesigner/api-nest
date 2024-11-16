import { Body, Controller, Post } from "@nestjs/common";
import { RegisterService } from '../services/register.service';
import { UserDTO } from "../dto/user.dto";


@Controller('/auth')
export class AuthController {

  constructor(private registerService: RegisterService) {}

  @Post()
  async register(@Body() body: UserDTO) {
    const token = await this.registerService.execute(body);
    return token;
  }
}