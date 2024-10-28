import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: "/login", component: () => import("@/views/Login/Index.vue") },
  {
    path: "/",
    component: () => import("@/views/Login/Index.vue"),
    name: "login",
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
