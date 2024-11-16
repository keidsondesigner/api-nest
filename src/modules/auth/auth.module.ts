import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { PrismaService } from "src/infra/database/prisma.service";
import { RegisterService } from "./services/register.service";
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
    RegisterService
  ]
})
export class AuthModule { }