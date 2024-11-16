
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { hash } from "bcrypt";
import { IUserRepository } from "../repositories/user.repository";
import { RegisterUserDTO } from "src/modules/auth/dto/register-user.dto";

@Injectable()
export class RegisterUserService {

  constructor(private userRepository: IUserRepository) {}

  async execute(body: RegisterUserDTO) {
    // verificando se o User existe;
    const user = await this.userRepository.findByUserOrEmail({
      name: body.name,
      email: body.email
    });

    if (user) {
      // mensagem de erro ao criar um User, se já existe um User com o mesmo username ou email;
      throw new HttpException("Usuário já cadastrado.", HttpStatus.BAD_REQUEST);
    }

    // hash de senha com 10 caracteres;
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