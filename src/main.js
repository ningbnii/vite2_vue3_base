import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Button } from "vant";
import { createMetaManager } from "vue-meta";

createApp(App).use(router).use(Button).use(createMetaManager()).mount("#app");
