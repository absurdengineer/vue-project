import * as Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";

Vue.Vue.createApp(App).use(store).use(router).mount("#app");
