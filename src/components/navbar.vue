<template>
  <Loader :isLoading />
  <nav
    class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-white dark:border-gray-200"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <!-- Instagram Logo Text -->
        <a
          href="#"
          class="flex items-center text-2xl font-semibold dark:text-gray-900"
        >
          Instagram
        </a>

        <!-- Search Bar (Hidden on small screens) -->
        <div class="hidden lg:flex flex-grow max-w-md mx-auto relative">
          <div class="relative w-full">
            <input
              v-model="searchQuery"
              @input="debouncedSearch"
              type="text"
              placeholder="Search"
              class="w-full p-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-xl dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-500 dark:text-gray-900"
            />
            <!-- Suggestions List -->
            <transition name="fade">
              <ul
                v-if="suggestions.length"
                class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden"
              >
                <li
                  v-for="suggestion in suggestions"
                  :key="suggestion.id"
                  class="px-4 py-3 text-lg hover:bg-gray-100 cursor-pointer"
                >
                  {{ suggestion.text }}
                </li>
              </ul>
            </transition>
          </div>
        </div>

        <!-- Navbar Icons with Font Awesome -->
        <div class="flex items-center space-x-4 lg:space-x-12">
          <!-- Home Icon -->
          <a href="#" class="text-xl text-gray-500 dark:text-gray-900">
            <i class="fas fa-home"></i>
          </a>

          <!-- Message Icon -->
          <a href="#" class="text-xl text-gray-500 dark:text-gray-900">
            <i class="fas fa-paper-plane"></i>
          </a>

          <!-- Add Post Icon -->
          <router-link
            to="/uploadpost"
            class="text-xl text-gray-500 dark:text-gray-900"
          >
            <i class="fas fa-plus-square"></i>
          </router-link>

          <!-- Explore Icon -->
          <a href="#" class="text-xl text-gray-500 dark:text-gray-900">
            <i class="fas fa-compass"></i>
          </a>

          <!-- Like Icon -->
          <button
            @click="clearUser"
            class="text-xl text-gray-500 dark:text-gray-900"
          >
            <i class="fa fa-sign-out"></i>
          </button>

          <!-- Profile Picture -->
          <div
            class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <router-link to="/profile">
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </router-link>
          </div>
        </div>
      </div>

      <!-- Mobile Search Bar (Visible on small screens) -->
      <div class="lg:hidden flex-grow max-w-md mx-auto mt-2 relative">
        <input
          v-model="searchQuery"
          @input="debouncedSearch"
          type="text"
          placeholder="Search"
          class="w-full p-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-xl dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-500 dark:text-gray-900"
        />
        <!-- Suggestions List for Mobile -->
        <transition name="fade">
          <ul
            v-if="suggestions.length"
            class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden"
          >
            <li
              v-for="suggestion in suggestions"
              :key="suggestion.id"
              class="px-4 py-3 text-lg hover:bg-gray-100 cursor-pointer"
            >
              {{ suggestion.text }}
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { debounce } from "lodash";
import { mapActions } from "vuex";
import Loader from "./Loader.vue";

export default {
  name: "Navbar",
  components: {
    Loader,
  },
  data() {
    return {
      searchQuery: "",
      suggestions: [],
      isLoading: false,
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    debouncedSearch: debounce(function () {
      this.fetchSuggestions();
    }, 300),
    async fetchSuggestions() {
      if (this.searchQuery.length === 0) {
        this.suggestions = [];
        return;
      }

      try {
        const response = await axios.get("YOUR_API_ENDPOINT", {
          params: { query: this.searchQuery },
        });
        // Limit suggestions to 10 items
        this.suggestions = response.data.slice(0, 10);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    },

    //Logout Func

    async clearUser() {
      this.isLoading = true;
      try {
        await this.logout();
        localStorage.removeItem("user");
        this.$router.push("/login");
      } catch (error) {
        console.log("error in state logout ", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
