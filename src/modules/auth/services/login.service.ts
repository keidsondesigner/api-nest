import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserDTO } from "../dto/user.dto";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/infra/database/prisma.service";
import { compare } from "bcrypt";

@Injectable()
export class LoginService {
  constructor(private jwtService: JwtService, private prismaService: PrismaService) {}

  async execute(body: UserDTO) {
    
    // Validar se email existe no meu BD;
    const user = await this.prismaService.user.findFirst({
      where: {
        email: body.email
      }
    })
    // NAO - se email não existir, retornar erro;
    if (!user) {
      throw new UnauthorizedException();
    }

    // SIM - email existe no BD, validar senha se esta correta;
    // comparar a hash da senha do body com a hash da senha do BD;
    const passwordMatch = await compare(body.password, user.password);

    // NAO - senha diferente, retornar erro;
    if (!passwordMatch) {
      throw new UnauthorizedException();
    }
    
    // SIM - hash de senha são iguais,  Gerar o token;
    const payload = {
      sub: user.id,
      email: user.email
    }

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token
    }

  }

}