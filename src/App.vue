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
    border: 1px solid black;
    height: 100vh;
    .view-component{height: 90vh;}
    .foot{height: 8vh;
      margin-top: 2vh ;}
}

</style>
