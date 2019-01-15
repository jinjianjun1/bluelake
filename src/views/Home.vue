<template>
  <div class="home">
    <index />
    <footTab />
  </div>
</template>

<script>
// @ is an alias to /src
import index from '@/components/index.vue'
import footTab from '@/components/foot-tabs.vue'
export default {
  name: 'home',
  components: {
    index,
    footTab
  }
}
</script>
<style>
  .home{
    border: 1px solid;
    height: 100%;
    width: 100%;
  }
</style>
