import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { CreatedUserDTO } from "../dto/register-user.dto";


@Injectable()
export class CreateUserValidationPipe  implements PipeTransform{
  // Recebo o CreateUserDTO e faço a validação
  transform({name, username, email, password}: CreatedUserDTO, metadata: ArgumentMetadata) {
    // validando se os campos foram preenchidos
    if (!name || !username || !email || !password) {
      throw new HttpException("[nome, email, username, password] Todos os campos devem ser preenchidos.", HttpStatus.UNPROCESSABLE_ENTITY);
    }

    // retornando o CreateUserDTO, se os campos estão validos
    return {name, username, email, password};
  }
  
}