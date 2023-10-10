<template>
  <div class="movie-details">
    <div class="movie-poster">
      <img :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="movie.title + ' poster'" />
    </div>
    <div class="movie-detail">
      <router-link :to="'/' + movie.id" >
        <h3 class="movie-link">{{ movie.original_title }}</h3>
      </router-link>
      <router-link :to="'/' + movie.id" >
        <h3 class="movie-link">{{ movie.name }}</h3>
      </router-link>
      <h3>Rating: <span class="vote">{{ movie.vote_average }}</span></h3>
      <h3>{{ movie.release_date}}</h3>
    </div>
  </div>    
</template>
<script>
  export default {
  props: {
    movie: {
      type: Object
    },
  },

}
</script>  
<style scoped>
h3{
    text-transform: none;
    color: white;
}
.movie-poster{
  width: fit-content;

}
img{
  border-radius: 5px;
  height: 20%;
}
a{
  transition: 0.4s;
}
a:hover {
  color: #5e4f4f;
}
.vote{
  background-color: rgb(144, 190, 74);
  border-radius: 5px;
}
@media screen and (max-width: 1024px){
  h3{
    font-size: 20px;
  }
  .vote{
    font-size: 20px;
  }
}
@media screen and (max-width: 768px){
  h3{
    font-size: 12px;
  }
  .vote{
    font-size: 12px;
  }
}
</style>