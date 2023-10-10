import { createApp } from "vue";
import router from "./router/index";
import App from "./App.vue";
import store from "./store/store";
import 'bootstrap/dist/css/bootstrap.css'


let app = createApp(App);


app.use(store).use(router).mount("#app");