import "virtual:windi.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./routes";

const router = createRouter({ history: createWebHistory(), routes });

router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title as string;
    }
});

const app = createApp(App);

app.use(router);

app.mount("#app");
