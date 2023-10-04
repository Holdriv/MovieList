<template>
  <div class="counter">
    <section>
      <div>
        <MovieList :items="items"/>
      </div>
    </section>
    <footer>

    </footer>
  </div>
</template>
<script>
import store from '@/store/store'
import { mapGetters } from 'vuex'
import MovieList from '../movie/MovieList.vue'

export default{
    data() {

    },
    computed: {
        length() {
            return store.state.movieItem;
        },
        ...mapGetters(['items'])
    },
    components: { MovieList }
}
</script>
<style>
.counter{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
span{
  font-size: 30px;
  color: aliceblue;
}
</style>
/
/