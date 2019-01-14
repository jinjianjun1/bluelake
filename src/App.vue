<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->

    </div>

    <router-view/>
  </div>
</template>

<style lang="scss">
  *{box-sizing: border-box;margin:0;padding: 0;}
  #app {
    border: 1px solid black;
    height: 100vh;
}
#nav {

}
</style>
