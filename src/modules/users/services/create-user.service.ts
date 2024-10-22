import { PrismaService } from "src/infra/database/prisma.service";
import { UserDTO } from "../dto/user.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateUserService {

  constructor(private prismaService: PrismaService) {}

  async execute(body: UserDTO) {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [{ username: body.username }, { email: body.email }]
      },
    });

    if (user) {
      throw new Error("Usuário já cadastrado.");
    }

    return await this.prismaService.user.create({
      data: {
        name: body.name,
        username: body.username,
        email: body.email,
        password: body.password
      }
    });
    
  }
}