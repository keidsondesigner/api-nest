import { Controller, Get } from "@nestjs/common";

//@Controller('users')
@Controller()
export class UserController {
  constructor() {}

  @Get('/helloUser')
  helloUser() {
    return 'hello user';
  }
}