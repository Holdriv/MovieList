<template>
  <div class="counter">
    <div class="links">
      <router-link to="/about">
        Second page
      </router-link>
      <router-link to="/contact">
        contact
      </router-link>
    </div>

    <section>
      <div>
        <span>MAIN TAG {{ length }}</span>
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
import MovieList from './MovieList.vue'

export default{
    data() {
    },
    computed: {
        length() {
            return store.state.count;
        },
        ...mapGetters(['items'])
    },
    mounted() {
        this.$store.dispatch("fetchMovie");
        console.log(this.items.length);
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