import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({ history: createWebHistory(), routes });

router.afterEach((to, from) => {
    document.title = (to.meta.title as string) ?? "GScale";
});

const app = createApp(App);

app.use(router);

app.mount("#app");
