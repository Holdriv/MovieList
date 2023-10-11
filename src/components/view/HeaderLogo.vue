<template>
    <header>
    <div class="header">
      <div class="nav">
        <router-link class="links" to="/">
          MOVIES
        </router-link>
        <router-link class="links" to="/series">
          SERIES
        </router-link>
        <router-link class="links" to="/contact">
          CONTACT US
        </router-link>
      </div>
      <div class="input-group input-group-sm mb-3">
        <input @keyup.enter="searchMovie" placeholder="search" v-model="search" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
      </div>
      <div class="search">
        <button @click="searchMovie" type="button" class="btn btn-outline-secondary btn-sm">SEARCH</button>
      </div>

    </div>
    </header>
</template>
<script>
import router from '@/router';

export default{
  data(){
    return{
      search: ""
    }
  },
  methods: {
    searchMovie() {
      router.push('search')
      this.$store.dispatch('fetchMovieSearch', this.search)
      this.search=""
    },
  },
}
</script>
<style>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1vw;
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
  margin-left: 3vw;
  text-decoration: none;
  color: aliceblue;
  transition: 0.3s;
}
a:hover {
  color: #5e4f4f;
}
.search{
  margin-right: 10vw;
}
@media screen and (max-width: 900px) {
  .links{
    font-size: 12px;
  }
}
@media screen and (max-width: 425px) {
  .links{
    font-size:10px;
  }
}
</style>
