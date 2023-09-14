<template>
<div class="movies-list">
      <div class="movie" v-for="movie in items" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="movie-link">
          <div class="movie-poster">
            <img :src="`${movie.i.imageUrl}`" :alt="movie.title + ' poster'" />
          </div>
          <div class="movie-detail">
            <h3>{{ movie.l }}</h3>
            <h3>{{ movie.id }}</h3>
            <h3>{{ movie.y }}</h3>
            <div class="movie-ratings">
              <span>{{ movie.vote_average }}</span><uis-star class="star-icon"/>
            </div>
          </div>
        </router-link>
      </div>
    </div>
</template>
<script>
export default {

props: ['items'],

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
    padding: 40px 20px;
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
