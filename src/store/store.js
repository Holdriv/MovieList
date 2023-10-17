import { createStore } from "vuex";
import movieList from "./modules/movieList";
import series from "./modules/series";
import movieItem from "./modules/movieItem";
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movieList,
    movieItem,
    series,
  }
})
export default store;





