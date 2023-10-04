import axios from "axios";
const movieList={
    state(){
        return{
            items: []
        }
    },
    mutations: {
        SET_ITEMS(state, items){
            state.items=items
        }
    },
    getters: {
        items: state => state.items
    },
    actions: {
        async fetchMovie({commit}){
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/popular',
                params: {language: 'en-US', page: '1'},
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