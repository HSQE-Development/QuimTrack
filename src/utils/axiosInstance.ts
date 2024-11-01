import axios from "axios";
import { useAuthStore } from "@/store/authStore";

export const axiosPublicInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Cambia la URL base según tu API
  timeout: 5000,
});

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Cambia la URL base según tu API
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const token =
      authStore.authUser?.token.access || localStorage.getItem("token_auth"); // Token almacenado en el store o en localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const authStore = useAuthStore();

    if (error.response && error.response.status === 401) {
      authStore.logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
