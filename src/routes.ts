import Index from "./pages/Index.vue";
import Builds from "./pages/Builds.vue";
import BuildCharacter from "./pages/BuildCharacter.vue";
import title from "./lib/title";

// Define all routes here
export default [
    {
        path: "/",
        component: Index,
        meta: {
            title: title("Home"),
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
            title: title("Builds"),
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("./pages/404.vue"),
        meta: {
            title: title("Not Found"),
        },
    },
];
