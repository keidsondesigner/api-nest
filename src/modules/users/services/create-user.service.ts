import { UserDTO } from "../dto/user.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { hash } from "bcrypt";
import { IUserRepository } from "../repositories/user.repository";

@Injectable()
export class CreateUserService {

  constructor(private userRepository: IUserRepository) {}

  async execute(body: UserDTO) {
    // verificando se o User existe;
    const user = await this.userRepository.findByUserOrEmail({
      name: body.name,
      email: body.email
    });

    if (user) {
      // mensagem de erro ao criar um User, se já existe um User com o mesmo username ou email;
      throw new HttpException("Usuário já cadastrado.", HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await hash(body.password, 10);
    // criando um novo User;
    return await this.userRepository.save({
      name: body.name,
      username: body.username,
      email: body.email,
      password: hashedPassword
    });

  }
}