
import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
        state(){
            return {
                count: 1334,
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
                    url: 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game',
                    // params: {q: 'series'},
                    headers: {
                      'X-RapidAPI-Key': '17df7b129amshc5f4f457045b47cp1b8d4cjsn7569b4b8c7ad',
                      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
                    }
                  };
                  
                  try {
                      const response = await axios.request(options);
                      console.log(response.data);
                      commit("SET_ITEMS", response.data.d)
                  } catch (error) {
                      console.error(error);
                  }
            }
        }
    })
export default store;