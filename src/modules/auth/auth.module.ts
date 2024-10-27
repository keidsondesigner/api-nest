import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { PrismaService } from "src/infra/database/prisma.service";
import { LoginService } from "./services/login.service";
import { JwtModule } from "@nestjs/jwt";

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
    LoginService
  ]
})
export class AuthModule { }