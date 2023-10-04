<template>
<div class="movies-list">
  <MovieDetail class="movie" v-for="movie in items.results" :movie="movie" :items="items" :key="movie.id"/>
</div>
</template>
<script>
import MovieDetail from './MovieDetail.vue';
export default {
  components: {
    MovieDetail
  },
  props: ['items'],
  mounted() {
        this.$store.dispatch("fetchMovie");
    }

  }
</script>    
<style>
.movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;
}
.movie {
    max-width: 25%;
    flex: 1 1 50%;
    padding: 20px 10px;
}
h3{
    text-transform: none;
    color: aliceblue;
}
img {
      display: block;
      width: 100%;
      height: 40vh;
      object-fit: cover;
    }
</style>
