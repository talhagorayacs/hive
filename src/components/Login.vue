<template>
  <Loader :isLoading />
  <section class="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        <img class="w-8 h-8 mr-2" src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-icon-download-in-svg-png-gif-file-formats--logo-social-media-logos-pack-icons-189802.png?f=webp&w=256" alt="logo">
        Photogram
      </a>
      <div class="w-full bg-white rounded-lg shadow border border-gray-300 md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input v-model="email" type="email" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com" required>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input v-model="password" type="password" name="password" id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required>
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500">Remember me</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
            </div>
            <button type="submit"
  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
  Sign in
</button>

            <p class="text-sm font-light text-gray-500">
              Don’t have an account yet? <router-link to="/signup" class="font-medium text-primary-600 hover:underline">Sign up</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import Loader from "./Loader.vue";

export default {
  name: "Login",
  components: {
    Loader,
  },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    ...mapActions("auth", ["login", "logout"]),
    async handleSubmit() {
      this.isLoading = true;
      try {
        await this.login({ email: this.email, password: this.password });
        this.$router.push("/");
        console.log("pushing to home");
        console.log(this.$store.state.auth.status);
      } catch (error) {
        console.error("Error during login:", error);
      } finally {
        this.isLoading = false; // Stop loading
      }
    },

    // Logout method
    async clearUser() {
      this.isLoading = true;
      try {
        await this.logout();
        localStorage.removeItem("user");
      } catch (error) {
        console.log("error in state logout ", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
