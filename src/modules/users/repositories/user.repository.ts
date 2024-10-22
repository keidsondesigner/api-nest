import { CreatedUserDTO, UserDTO, UserNameAndEmailDTO } from "../dto/user.dto";

export abstract class IUserRepository {
  abstract findByUserOrEmail(data: UserNameAndEmailDTO): Promise<CreatedUserDTO | null>;
  abstract save(data: UserDTO): Promise<CreatedUserDTO>;
}