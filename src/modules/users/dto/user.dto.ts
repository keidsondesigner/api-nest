export type UserDTO = {
  name: string;
  username: string;
  email: string;
  password: string;
}

export type CreatedUserDTO = {
  id: string;
  createdAt: Date;
} & UserDTO

export type UserNameAndEmailDTO = {
  name: string;
  email: string;
}