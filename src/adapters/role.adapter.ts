import { Role, RoleResponse } from "@/models";

export const createAdaptedRole = (role: RoleResponse) => {
  const adaptedRole: Role = {
    id: role.id,
    name: role.name,
  };
  return adaptedRole;
};
