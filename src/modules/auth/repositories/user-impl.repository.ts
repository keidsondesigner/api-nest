import { PrismaService } from "src/infra/database/prisma.service";

import { IUserRepository } from "./user.repository";
import { Injectable } from "@nestjs/common";
import { CreatedUserDTO, RegisterUserDTO, UserNameAndEmailDTO } from "../dto/register-user.dto";

@Injectable()
export class UserImplRepository  implements IUserRepository{

  constructor(private prismaService: PrismaService) {}

  async findByUserOrEmail(data: UserNameAndEmailDTO): Promise<CreatedUserDTO | null> {
    // verificando se o User existe;
    return await this.prismaService.user.findFirst({
      where: {
        OR: [{ name: data.name }, { email: data.email }]
      }
    });
  }

  async save(data: RegisterUserDTO): Promise<CreatedUserDTO> {
    return await this.prismaService.user.create({
      data: {
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password
      }
    })
  }

}