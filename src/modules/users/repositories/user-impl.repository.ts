import { PrismaService } from "src/infra/database/prisma.service";
import { UserNameAndEmailDTO, CreatedUserDTO, UserDTO } from "../dto/user.dto";
import { IUserRepository } from "./user.repository";
import { Injectable } from "@nestjs/common";

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

  async save(data: UserDTO): Promise<CreatedUserDTO> {
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