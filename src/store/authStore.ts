import { defineStore } from "pinia";
import { AuthUser } from "@/models";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    authUser: null as AuthUser | null,
    isAuthenticated: false,
  }),
});
