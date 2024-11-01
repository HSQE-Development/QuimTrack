import { useAuthStore } from "@/store/authStore";
import { createRouter, createWebHashHistory } from "vue-router";
import AppLayout from "@/components/layouts/AppLayout.vue";

const routes = [
  { path: "/login", component: () => import("@/views/Login/Index.vue") },
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        component: () => import("@/views/Dashboard/Index.vue"),
        name: "dashboard",
      },
    ],
    // @ts-ignore
    beforeEnter: (to: any, from: any, next: any) => {
      const authStore = useAuthStore();
      if (!authStore.authUser?.token.access) next("/login");
      else next();
    },
  },
];

/**
 * Rutas de la app
 */
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
