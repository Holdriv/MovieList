<template>
    <header>
    <div class="header">
      <div>
        <router-link to="/">
          MOVIENET
        </router-link>
      </div>
      <div class="nav">
        <router-link to="/">
          HOME
        </router-link>
        <a href="">MOVIES</a>
        <a href="">SERIES</a>
        <router-link to="/contact">
          CONTACT US
        </router-link>
      </div>
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
      </div>
      <div>
        <a href="">SignIn</a>
        <a href=""></a>
        <!-- <router-link></router-link>
        <router-link></router-link>  -->
      </div>
    </div>
    </header>
</template>
<style>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-group{
    padding-top: 20px;
    max-width: 35%;
    color: #212121;
}
span{
  color: aliceblue;
}
.nav a{
  margin-left: 15px;
  font-family: 'Times New Roman', Times, serif;
  text-decoration: none;
  color: aliceblue;
}
</style>
