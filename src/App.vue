<template>
  <div class="main-content">


  <Navbar/>
  <v-app>
    <router-view></router-view>
  </v-app>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import Navbar from './components/navbar.vue';
export default {
  name: 'App',
  components:{
    Navbar
  },
  created() {
    this.initializeStore();
    console.log(JSON.stringify(localStorage.getItem('user')));
  },
  methods: {
    ...mapActions('auth', ['initializeStore'])
  }
};
</script>

<style>
.main-content {
  margin-top: 60px; /* Adjust this value according to your Navbar height */
  
  }
</style>
