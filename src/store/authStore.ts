import { defineStore } from "pinia";
import {
  ApiResponse,
  SignInRequest,
  AuthUser,
  AuthUserResponse,
} from "@/models";
import { axiosPublicInstance } from "@/utils/axiosInstance";
import { createAdaptedAuthUser } from "@/adapters";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    authUser: null as AuthUser | null,
    isAuthenticated: false,
    loading: false,
  }),
  actions: {
    async signIn(credentials: SignInRequest) {
      this.loading = true;
      try {
        const response = await axiosPublicInstance.post<
          ApiResponse<{ auth_user: AuthUserResponse }>
        >("/auth/sign_in/", credentials);
        this.authUser = createAdaptedAuthUser(response.data.data.auth_user);
        localStorage.setItem("token_auth", this.authUser.token.access);
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      this.authUser = null;
      localStorage.removeItem("token_auth");
    },
  },
  persist: {
    storage: localStorage,
    pick: ["authUser"],
  },
});
