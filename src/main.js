import { createApp } from "vue";
import router from "./router/index";
import App from "./App.vue";
import store from "./store/store";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

let app = createApp(App);


app.use(store).use(router).mount("#app");