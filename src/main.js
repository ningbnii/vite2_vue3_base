import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Button } from "vant";
import { createMetaManager } from "vue-meta";

const app = createApp(App).use(router).use(Button).use(createMetaManager());
await router.isReady();
app.mount("#app");
