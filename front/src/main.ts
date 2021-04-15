import store, { key } from './store';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(store, key).use(router).mount("#app");
