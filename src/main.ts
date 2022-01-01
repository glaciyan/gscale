import "virtual:windi.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GArticle from "./components/GArticle.vue";
import tooltip from "./directives/tooltip";

const app = createApp(App);

app.use(router);
app.component("GArticle", GArticle);
tooltip(app, {
  tooltipId: "tooltip",
  tooltipContentId: "tooltipContent",
  tooltipArrowId: "tooltipArrow",
  offset: 8,
  shiftPadding: 6,
  arrowPadding: 10,
});

app.mount("#app");
