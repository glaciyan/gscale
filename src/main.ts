import "virtual:windi.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import tooltip from "./directives/tooltip";

const app = createApp(App);

app.use(router);
tooltip(app, {
  tooltipId: "tooltip",
  tooltipContentId: "tooltipContent",
  tooltipArrowId: "tooltipArrow",
  offset: 8,
  shiftPadding: 6,
  arrowPadding: 10,
});

console.log(
  "%cThanks for checking out gscale.cc",
  "font-size: 1.5rem; font-weight: bold; background-image: url( 'https://www.gscale.cc/favicon.svg' );background-size: 4rem 4rem; background-repeat: no-repeat; background-position: center left; padding: 2rem 0px 2rem 5rem"
);

console.log(
  "%cgscale.cc is open source https://github.com/glaciyan/gscale",
  "font-size: 1.3rem; font-weight: bold; color: #60a5fa;"
);

app.mount("#app");
