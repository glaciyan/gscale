import Index from "./pages/Index.vue";
import Builds from "./pages/Builds.vue";
import BuildCharacter from "./pages/BuildCharacter.vue";

export default [
    {
        path: "/",
        component: Index,
        meta: {
            title: "Home - GScale",
        },
    },
    {
        path: "/build/:character",
        component: BuildCharacter,
    },
    {
        path: "/builds",
        component: Builds,
        meta: {
            title: "Builds - GScale",
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
