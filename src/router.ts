import Index from "./pages/Index.vue";
import BuildCharacter from "./pages/BuildCharacter.vue";
import title from "./title";
import { createRouter, createWebHistory } from "vue-router";

// Define all routes here
const routes = [
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
    component: () => import("./pages/Builds.vue"),
    meta: {
      title: title("Builds"),
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("./pages/NotFound.vue"),
    meta: {
      title: title("Not Found"),
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ? savedPosition : { top: 0, left: 0 };
  },
});

router.afterEach((to) => {
  // Take the optional title value from the route and set it as the page title
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
});

export default router;

export const navigation: { path: string; name: string }[] = [
  {
    path: "/",
    name: "Characters",
  },
  {
    path: "/builds",
    name: "Your Builds",
  },
];
