import "@/assets/fonts.css";
import "@/assets/style.scss";
import "@/style/style.scss";
import "./assets/iconfont/iconfont.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(createPinia());
// app.use(router)
// 判断设备是否是手机
import { mainStore } from "@/stores/index.ts";
const stores = mainStore();
window.addEventListener("resize", () => {
  stores.setIsPhone(window.innerWidth <= 720);
});
app.mount("#app");
