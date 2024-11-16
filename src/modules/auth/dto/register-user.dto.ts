export type RegisterUserDTO = {
  name: string;
  username: string;
  email: string;
  password: string;
}

export type CreatedUserDTO = {
  id: string;
  createdAt: Date;
} & RegisterUserDTO

export type UserNameAndEmailDTO = {
  name: string;
  email: string;
}