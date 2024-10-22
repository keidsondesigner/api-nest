import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { CreateUserService } from "./services/create-user.service";
import { PrismaService } from "src/infra/database/prisma.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserService, PrismaService],
})
export class UserModule {

}