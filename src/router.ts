import Index from "./pages/Index.vue";
import Builds from "./pages/Builds.vue";
import BuildCharacter from "./pages/BuildCharacter.vue";
import title from "./title";
import { createRouter, createWebHistory } from "vue-router"

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
    path: "/build/traveler/:travelerElement",
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

const router = createRouter({ history: createWebHistory(), routes });

router.afterEach((to, ) => {
  // Take the optional title value from the route and set it as the page title
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }

  // after each navigation scroll to the top of the page
  window.scrollTo(0, 0);
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
