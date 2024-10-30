import { AuthUser, AuthUserResponse } from "@/models";
import { createAdaptedUser } from "./user.adapter";

export const createAdaptedAuthUser = (auth_user: AuthUserResponse) => {
  const adaptedAuthUser: AuthUser = {
    user: createAdaptedUser(auth_user.user),
    token: auth_user.token,
  };
  return adaptedAuthUser;
};
