<template>
  <div class="nav">
    <router-link to="/">AAAAAAAAlexandria Alcancia-Shaw</router-link> |
    <router-link to="/about">AAAAAbout</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    font-family: "CircularStd-Book", sans-serif;
    margin: auto;
    padding: 10px;
}
</style>
