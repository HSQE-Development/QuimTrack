import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdSpacedashboardRound } from "oh-vue-icons/icons";
import { HiUser } from "oh-vue-icons/icons";
import { CoChartPie } from "oh-vue-icons/icons";
import { CoChart } from "oh-vue-icons/icons";
import VueEcharts from "vue-echarts";
import { BiThreeDotsVertical } from "oh-vue-icons/icons";

addIcons(MdSpacedashboardRound, HiUser, CoChartPie, CoChart, BiThreeDotsVertical);
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.component("v-icon", OhVueIcon);
app.component("VueEcharts", VueEcharts);
app.use(router);
app.use(pinia);
app.use(MotionPlugin);
app.use(Antd);

app.mount("#app");
