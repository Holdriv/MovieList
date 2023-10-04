import { createWebHistory, createRouter } from "vue-router";
import MainPage from "../components/view/MainPage.vue";
import ContactPage from "../components/view/ContactPage.vue";
import MovieItem from "../components/movie/MovieItem.vue";
import SeriesList from "../components/movie/SeriesList.vue";
import SearchPage from "../components/view/SearchPage.vue"

const routes = [
  { 
    path: "/", 
    component: MainPage },
  {
    path: "/contact",
    component: ContactPage
  },
  {
    path: '/:id',
    component: MovieItem
  },
  {
    path: '/series',
    component: SeriesList
  },
  {
    path: '/search',
    component: SearchPage
  },
    
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
