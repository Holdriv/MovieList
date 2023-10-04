<template>
    <header>
    <div class="header">
      <div>
        <router-link to="/">
          MOVIENET
        </router-link>
      </div>
      <div class="nav">
        <router-link to="/">
          MOVIES
        </router-link>
        <router-link to="/series">
          SERIES
        </router-link>
        <router-link to="/contact">
          CONTACT US
        </router-link>
      </div>
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
        <input @keyup.enter="searchMovie" v-model="search" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
      </div>
      <button @click="searchMovie" type="button" class="btn btn-outline-secondary">SEARCH</button>
      <div>
        <h3>{{ search }}</h3>
        
      </div>
    </div>
    </header>
</template>
<script>
import router from '@/router';

// import store from '@/store/store'
// import { mapGetters } from 'vuex'
export default{
  data(){
    return{
      search: ""
    }
  },
  computed: {
        // search() {
        //     return store.state.search;
        // },
  },
  methods: {
    searchMovie() {
      router.push('search')
      this.$store.dispatch('fetchMovieSearch', this.search)
    },
  },
}
</script>
<style>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-group{
    padding-top: 20px;
    max-width: 35%;
    color: #212121;
}
span{
  color: aliceblue;
}
.nav a{
  margin-left: 15px;
  font-family: 'Times New Roman', Times, serif;
  text-decoration: none;
  color: aliceblue;
}
.search-button{
  z-index: 10;
  color: aliceblue;

}
</style>
