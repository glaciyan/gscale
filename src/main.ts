import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { createRouter, createWebHistory } from "vue-router";

import Index from "./pages/index.vue";

const routes = [
    {
        path: "/",
        component: Index,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("./pages/404.vue"),
    },
];

const router = createRouter({ history: createWebHistory(), routes });

const app = createApp(App);

app.use(router);

app.mount("#app");
