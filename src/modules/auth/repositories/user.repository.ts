import { CreatedUserDTO, RegisterUserDTO, UserNameAndEmailDTO } from "../dto/register-user.dto";


export abstract class IUserRepository {
  abstract findByUserOrEmail(data: UserNameAndEmailDTO): Promise<CreatedUserDTO | null>;
  abstract save(data: RegisterUserDTO): Promise<CreatedUserDTO>;
}