import axios from "axios";
import { options } from "./series";
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
        async findMovie({commit}){  
              axios
                .get('https://api.themoviedb.org/3/movie/popular', options)
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