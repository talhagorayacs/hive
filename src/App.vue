<script >
import conf from './conf';

import SignUp from './components/SignUp.vue';
import Login from './components/login.vue';
import Post from './components/Post.vue';
import Navbar from './components/navbar.vue';
import SearchBar from './components/SearchBar.vue';
import ProfileComponent from './components/ProfileComponent.Vue';


export default {
  name:app,
  components:{
    SignUp,
    Login,
    Post,
    Navbar,
    SearchBar,
    ProfileComponent
  }
}

console.log(conf.appwriteURL);
</script>

<template>
  <div class="bg-gr">

  
  <!-- <SearchBar/> -->
  <Navbar/>
  <!-- <SignUp/> -->
  <!-- <Login/> -->
  <Post/>
  <Post/>
  <Post/>
  <Post/>
  <Post/>
  <!-- <ProfileComponent/> -->
  
</div>
</template>

<style scoped>

</style>
