import { User, UserResponse } from "@/models";
import { createAdaptedRole } from "./role.adapter";

export const createAdaptedUser = (user: UserResponse) => {
  const adaptedUser: User = {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    role: createAdaptedRole(user.role)
  };
  return adaptedUser;
};
