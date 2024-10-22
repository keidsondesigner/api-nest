import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { CreateUserService } from "./services/create-user.service";
import { PrismaService } from "src/infra/database/prisma.service";
import { UserImplRepository } from "./repositories/user-impl.repository";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserService, 
    PrismaService,
    {
      provide: 'IUserRepository',
      useClass: UserImplRepository
    }
  ],
})
export class UserModule {

}