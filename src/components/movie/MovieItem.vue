<template>
    <div class="movie-item"> 
        asdasdas
        <div class="movie-poster">
            <img :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieName.poster_path}`" />
        </div> 
        <div class="movie-detail">
            <div class="movie-settings">
                <span>Title:</span>
                <span>Year:</span>
                <span>Vote:</span>
                <span>Status:</span>
                <span>Description:</span>
            </div>
            <div class="movie-char">
                <span>{{ movieName.original_title }} {{ movieName.name }}</span>
                <span>{{ movieName.release_date }} {{ movieName.first_air_date }}</span>
                <span>{{ movieName.vote_average }}</span>
                <span>{{ movieName.status }}</span>
                <span class="description">{{ movieName.overview }}</span>
            </div>

        </div>
    </div>
</template>
  
<script>
import store from '@/store/store'
import { mapGetters } from 'vuex'
export default{
    
    data() {

    },
    computed: {
        movieName() {
            return store.state.movieItem.movieItem;
        },
        ...mapGetters(['movieItem'])
    },
    beforeMount() {
        
        this.$store.dispatch("findMovieItem", this.$route.params.id);
        
    },
    mounted(){
        this.$store.dispatch("findSeriesItem", this.$route.params.id);
    }
}
</script>
<style scoped>
h2{
    color: white;
    margin-top: 50px;
}
h3{
    color: white;
}
.movie-item{
    margin-top: 10vh;
    display: flex;
    justify-content: space-between;
    height: 100vh;
}
.movie-detail{
    margin-left: 3%;
    display: flex;
    justify-content: space-between;
}

img{
    width: fit-content;
    height: fit-content;
    height: 70vh;
    width: 25vw;
    border-radius: 10px;
}
.movie-settings{
    display: flex;
    flex-direction: column;
}
.movie-char{
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
}
span{
    font-size: 35px;
}
@media screen and (max-width: 1024px){
    span{
    font-size: 28px;
}
}
@media screen and (max-width: 768px){
    span{
    font-size: 20px;
}
.movie-item{
    display: flex;
    flex-direction: column;
}
img{
    width: fit-content;
    height: fit-content;
    height: 50vh;
    width: 50vw;
}
.movie-poster{
    display: flex;
    justify-content: center;
}
}

</style>

