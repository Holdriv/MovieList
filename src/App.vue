<script>
import HeaderLogo from './components/view/HeaderLogo.vue';
export default{
  components: {
    HeaderLogo
  }
}
</script>
<template>
  <div class="app">
    <HeaderLogo/>
    <router-view>
      
    </router-view>
  </div>
</template>



<style>
.app{
  padding: 4vh 0vw 4vh 9vw;
  background-color: #212121;
  height: 100%;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
}

</style>
