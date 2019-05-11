<template>
  <div class="home">
    <HomeInfo msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeInfo from '@/components/HomeInfo.vue'

export default {
  components: {
    'HomeInfo' : HomeInfo
  }
}
</script>

<style scoped>
</style>
