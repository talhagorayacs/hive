<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
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
/* Global styles or Vuetify's default styles can go here */
</style>
