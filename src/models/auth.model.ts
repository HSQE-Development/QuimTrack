import { User } from "./user.model";

interface Token {
  refresh: string;
  access: string;
}
export interface AuthUser {
  user: User;
  token: Token;
}
