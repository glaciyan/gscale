import Index from "./pages/index.vue";
import Builds from "./pages/builds.vue";

export default [
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
