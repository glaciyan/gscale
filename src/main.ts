import "virtual:windi.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./routes";

const router = createRouter({ history: createWebHistory(), routes });

router.afterEach((to, from) => {
    // Take the optional title value from the route and set it as the page title
    if (to.meta.title) {
        document.title = to.meta.title as string;
    }

    // after each navigation scroll to the top of the page
    window.scrollTo(0, 0);
});

const app = createApp(App);

app.use(router);

app.mount("#app");
