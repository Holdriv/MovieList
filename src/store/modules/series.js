import axios from "axios";
export const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2E0NzMyZDQ0OTZhOTI1MTBkMTc0YTU3MzgxZjZmYiIsInN1YiI6IjY1MGMzYTQ0YjViYzIxMDEyY2M5ZGVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hi--QEMrX0IgxtnENvirduWJt0CwBM7s0JfG5K44lEI'
  }
};
const movieList={
    actions: {
        async findSeries({commit}){
            axios
              .get(`https://api.themoviedb.org/3/tv/top_rated`, options)
              .then(function (response) {
                console.log(response.data);
                commit("SET_ITEMS", response.data)
              })
              .catch(function (error) {
                console.error(error);
              });
        },
        async findSeriesItem({commit}, id){

          axios
            .get(`https://api.themoviedb.org/3/tv/${id}`, options)
            .then(function (response) {
              console.log(response.data);
              commit("SET_MOVIEITEM", response.data)
            })
            .catch(function (error) {
              console.error(error);
            });
      },
    }
}
export default movieList;