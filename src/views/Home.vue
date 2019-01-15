<template>
  <div class="home">
    <index />
  </div>
</template>

<script>
// @ is an alias to /src
import index from '@/components/index.vue'
export default {
  name: 'home',
  components: {
    index,
  }
}
</script>
<style>
  .home{
    border: 1px solid transparent;
    height: 100%;
    width: 100%;
  }
</style>
