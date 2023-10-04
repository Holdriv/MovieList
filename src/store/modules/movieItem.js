import axios from "axios";
const movieList={
    state(){
        return{
            movieItem: {}
        }
    },
    mutations: {
        SET_MOVIEITEM(state, movieItem){
            state.movieItem=movieItem
        },
    },
    getters: {
        movieItem: state => state.movieItem
    },
    actions: {
      async fetchMovieItem({commit}, id){
          const options = {
              method: 'GET',
              url: `https://api.themoviedb.org/3/movie/${id}`,
              params: {language: 'en-US'},
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2E0NzMyZDQ0OTZhOTI1MTBkMTc0YTU3MzgxZjZmYiIsInN1YiI6IjY1MGMzYTQ0YjViYzIxMDEyY2M5ZGVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hi--QEMrX0IgxtnENvirduWJt0CwBM7s0JfG5K44lEI'
              }
            };
            
            axios
              .request(options)
              .then(function (response) {
                console.log(response.data);
                commit("SET_MOVIEITEM", response.data)
              })
              .catch(function (error) {
                console.error(error);
              });
      },
        async fetchMovieSearch({commit}, name){
          const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {query: `${name}`, include_adult: 'false', language: 'en-US', page: '1'},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2E0NzMyZDQ0OTZhOTI1MTBkMTc0YTU3MzgxZjZmYiIsInN1YiI6IjY1MGMzYTQ0YjViYzIxMDEyY2M5ZGVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hi--QEMrX0IgxtnENvirduWJt0CwBM7s0JfG5K44lEI'
            }
          };
          
          axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
              commit("SET_ITEMS", response.data)
            })
            .catch(function (error) {
              console.error(error);
            });
      },
    }
}
export default movieList;