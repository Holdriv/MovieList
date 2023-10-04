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
  padding: 4dvh 5vw;
  background-color: #212121;
  height: 100%;
  width: 100%;
}
</style>
