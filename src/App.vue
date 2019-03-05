<template>
  <div id="app">
    <div class="view-component">
      <router-view class="star-index"/>
    </div>
    <foot class="foot"></foot>
  </div>
</template>
<script>
  import foot from './components/foot-tabs'
  export default {
    name: 'App',
    components:{
      foot
    }
  }
</script>
<style lang="scss">
  *{box-sizing: border-box;margin:0;padding: 0;}
  #app {
    height: 100vh;
    .view-component{height: 90vh;}
    .foot{height: 10vh;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 10;
    }
}

</style>
