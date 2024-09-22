<template>
  <Navbar/>
  <Posts/>
</template>

<script>
import Navbar from './navbar.vue';
import Posts from './Posts.vue';

export default {
  name: "Home",
  components: {
    Navbar,
    Posts
  }
};
</script>

<style scoped>
</style>
