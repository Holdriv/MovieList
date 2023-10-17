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
        this.$store.dispatch("findMovie");
    }

  }
</script>    
<style scoped>
.movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;
}
.movie {
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
@media screen and (max-width: 1024px) {
  .movie{
    width: 50%;
  }
}
</style>
