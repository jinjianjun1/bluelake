<template>
  <div class="star-index">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .star-index{
    border: 1px solid red;
    height: 100vh;
    width: 100vh;
    background: url("../assets/index.png") center center no-repeat fixed;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
