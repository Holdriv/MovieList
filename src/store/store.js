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





// import axios from "axios";
// import { createStore } from "vuex";

// const store = createStore({
//         state(){
//             return {
//                 count: 1334,
//                 items: [],
//                 movieItem: {},
//             }
//         },
//         mutations: {
//             SET_ITEMS(state, items){
//                 state.items=items
//             },
//             SET_MOVIEITEM(state, movieItem){
//                 state.movieItem=movieItem
//             },
//         },
//         getters: {
//             items: state => state.items
//         },
//         actions: {
//             async fetchMovie({commit}){
//                 const options = {
//                     method: 'GET',
//                     url: 'https://api.themoviedb.org/3/movie/popular',
//                     params: {language: 'en-US', page: '1'},
//                     headers: {
//                       accept: 'application/json',
//                       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2E0NzMyZDQ0OTZhOTI1MTBkMTc0YTU3MzgxZjZmYiIsInN1YiI6IjY1MGMzYTQ0YjViYzIxMDEyY2M5ZGVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hi--QEMrX0IgxtnENvirduWJt0CwBM7s0JfG5K44lEI'
//                     }
//                   };
                  
//                   axios
//                     .request(options)
//                     .then(function (response) {
//                       console.log(response.data);
//                       commit("SET_ITEMS", response.data)
//                     })
//                     .catch(function (error) {
//                       console.error(error);
//                     });
//             },
//             async fetchMovieItem({commit}, id){
//                 const options = {
//                     method: 'GET',
//                     url: `https://api.themoviedb.org/3/movie/${id}`,
//                     params: {language: 'en-US'},
//                     headers: {
//                       accept: 'application/json',
//                       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2E0NzMyZDQ0OTZhOTI1MTBkMTc0YTU3MzgxZjZmYiIsInN1YiI6IjY1MGMzYTQ0YjViYzIxMDEyY2M5ZGVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hi--QEMrX0IgxtnENvirduWJt0CwBM7s0JfG5K44lEI'
//                     }
//                   };
                  
//                   axios
//                     .request(options)
//                     .then(function (response) {
//                       console.log(response.data);
//                       commit("SET_MOVIEITEM", response.data)
//                     })
//                     .catch(function (error) {
//                       console.error(error);
//                     });
//             },
//             async fetchSeries({commit}){
//               const options = {
//                   method: 'GET',
//                   url: 'https://api.themoviedb.org/3/tv/top_rated',
//                   params: {language: 'en-US', page: '1'},
//                   headers: {
//                     accept: 'application/json',
//                     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2E0NzMyZDQ0OTZhOTI1MTBkMTc0YTU3MzgxZjZmYiIsInN1YiI6IjY1MGMzYTQ0YjViYzIxMDEyY2M5ZGVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hi--QEMrX0IgxtnENvirduWJt0CwBM7s0JfG5K44lEI'
//                   }
//                 };
                
//                 axios
//                   .request(options)
//                   .then(function (response) {
//                     console.log(response.data);
//                     commit("SET_ITEMS", response.data)
//                   })
//                   .catch(function (error) {
//                     console.error(error);
//                   });
//             },
//             async fetchSeriesItem({commit}, id){
//               const options = {
//                 method: 'GET',
//                 url: `https://api.themoviedb.org/3/tv/${id}`,
//                 params: {language: 'en-US'},
//                 headers: {
//                   accept: 'application/json',
//                   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2E0NzMyZDQ0OTZhOTI1MTBkMTc0YTU3MzgxZjZmYiIsInN1YiI6IjY1MGMzYTQ0YjViYzIxMDEyY2M5ZGVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hi--QEMrX0IgxtnENvirduWJt0CwBM7s0JfG5K44lEI'
//                 }
//               };
              
//               axios
//                 .request(options)
//                 .then(function (response) {
//                   console.log(response.data);
//                   commit("SET_MOVIEITEM", response.data)
//                 })
//                 .catch(function (error) {
//                   console.error(error);
//                 });
//           },
//           async fetchMovieSearch({commit}, name){
//             const options = {
//               method: 'GET',
//               url: 'https://api.themoviedb.org/3/search/movie',
//               params: {query: `${name}`, include_adult: 'false', language: 'en-US', page: '1'},
//               headers: {
//                 accept: 'application/json',
//                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2E0NzMyZDQ0OTZhOTI1MTBkMTc0YTU3MzgxZjZmYiIsInN1YiI6IjY1MGMzYTQ0YjViYzIxMDEyY2M5ZGVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hi--QEMrX0IgxtnENvirduWJt0CwBM7s0JfG5K44lEI'
//               }
//             };
            
//             axios
//               .request(options)
//               .then(function (response) {
//                 console.log(response.data);
//                 commit("SET_ITEMS", response.data)
//               })
//               .catch(function (error) {
//                 console.error(error);
//               });
//         },
//         }
//     })
// export default store;
