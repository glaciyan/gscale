import "virtual:windi.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GArticle from "./components/GArticle.vue";

const app = createApp(App);

app.use(router);
app.component("GArticle", GArticle);

app.mount("#app");
