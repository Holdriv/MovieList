import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import About from "../components/PageSecond.vue";
import ErrorPage from "../components/ErrorPage.vue";
import ContactPage from "../components/ContactPage.vue"
import MovieDetail from "../components/MovieDetail.vue"

const routes = [
  { 
    path: "/", 
    component: HelloWorld },
  { 
    path: "/about", 
    component: About },
  {
    path: "/*",
    component: ErrorPage,
  },
  {
    path: "/contact",
    component: ContactPage
  },
  {
    path: '/movie/:id',
    component: MovieDetail
  }
    
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
