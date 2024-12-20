import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { PrismaService } from "src/infra/database/prisma.service";
import { LoginService } from "./services/login.service";
import { JwtModule } from "@nestjs/jwt";
import { RegisterUserService } from "./services/register-user.service";
import { IUserRepository } from "./repositories/user.repository";
import { UserImplRepository } from "./repositories/user-impl.repository";
import { ProfileUserService } from "./services/profile-user.service";
import { AuthGuard } from "src/infra/providers/auth-guard.provider";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '1d'
      }
    })
  ],
  controllers: [AuthController],
  providers: [
    PrismaService,
    LoginService,
    RegisterUserService,
    ProfileUserService,
    AuthGuard,
    {
      provide: IUserRepository,
      useClass: UserImplRepository
    }
  ]
})
export class AuthModule { }