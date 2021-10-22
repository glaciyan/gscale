import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { createRouter, createWebHistory } from "vue-router";

import Index from "./pages/index.vue";
import Builds from "./pages/builds.vue";

const routes = [
    {
        path: "/",
        component: Index,
        meta: {
            title: "Home - GScale",
        },
    },
    {
        path: "/builds",
        component: Builds,
        meta: {
            title: "Your Builds - GScale",
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("./pages/404.vue"),
        meta: {
            title: "Not Found - GScale",
        },
    },
];

const router = createRouter({ history: createWebHistory(), routes });

router.afterEach((to, from) => {
    document.title = (to.meta.title as string) ?? "GScale";
});

const app = createApp(App);

app.use(router);

app.mount("#app");
