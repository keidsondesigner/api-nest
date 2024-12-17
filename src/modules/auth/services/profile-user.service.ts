import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../repositories/user.repository";

@Injectable()
export class ProfileUserService {
    constructor(private userRepository: IUserRepository) {}

    async execute(userId: string) {
        const user = await this.userRepository.findById(userId);
        return user;
    }
}