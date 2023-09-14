<template>
    <div class="movie-detail">
      <div class="movie-poster">
        posete  
        <!-- <img :src="`${movie.i.imageUrl}`" :alt="movie.title + ' poster'" /> -->
      </div>
      <!-- <h3>{{ detail.l }}</h3>
      <h3>{{ detail.id }}</h3>
      <h3>{{ detail.y }}</h3> -->
    </div>
    <h1>
      asddasasd
      {{ $route.params.id }}
      {{ movie.id }}
    </h1>
  </template>
<script>
  export default {
  data(){
    return{
      movie: {}
    }
  },
  // mounted(){
  //   fetch(`https://online-movie-database.p.rapidapi.com/title/find?${route.params.id}`)
  //               .then(response => response.json())
  //               .then(data => {
  //                   movie = data  
  //               })
  //               console.log(response.data);
  // }
}
</script>  