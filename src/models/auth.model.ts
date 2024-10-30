import { User, UserResponse } from "./user.model";

interface Token {
  refresh: string;
  access: string;
}
export interface AuthUser {
  user: User;
  token: Token;
}

export interface AuthUserResponse {
  user: UserResponse;
  token: Token;
}

export interface SignInRequest {
  email: string;
  password: string;
}
