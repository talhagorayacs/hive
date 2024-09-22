<template>
  <div class="custom-bg">
    <div class="max-w-4xl mx-auto p-4">
      <!-- Profile Section -->
      <div class="flex flex-col items-center md:flex-row md:items-start md:space-x-8 mb-8">
        <div class="flex-shrink-0 mb-4 md:mb-0">
          <button>
            <router-link to="/uploadprofile">
              <img class="w-36 h-36 rounded-full border-2 border-gray-300 object-cover" :src="imageUrl" alt="Profile Picture">
            </router-link>
          </button>
        </div>
        <div class="md:ml-0 flex-grow text-center md:text-left">
          <div class="flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:flex-row mb-2">
            <h2 class="text-2xl font-bold">{{ userName }}</h2>
            <button class="mt-2 md:mt-0 md:ml-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Follow</button>
          </div>
          <div class="flex justify-center md:justify-start space-x-6 text-gray-600 mb-4">
            <span><strong>{{ posts.length }}</strong> posts</span>
            <span><strong>13.5k</strong> followers</span>
            <span><strong>22</strong> following</span>
          </div>
          <p class="font-semibold"><span class="font-normal">{{ description }}</span></p>
        </div>
      </div>

      <!-- Responsive Photos Grid Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        <div v-for="post in posts" :key="post.$id" class="aspect-w-1 aspect-h-1 w-full">
          <img class="object-cover w-full h-full rounded-lg" :src="post.postUrl" alt="Post Image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import profileService from '../appwrite/profileService';
import postService from '../appwrite/service';

export default {
  name: 'ProfileComponent',
  data() {
    return {
      posts: [],
      profileDetails: {},
      name: '',
      description: '',
      imageUrl: '',
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['userData']),
    userName() {
      return this.userData.name;
    },
    userId() {
      return this.userData.$id;
    },
  },
  methods: {
    async getProfileData() {
  try {
    const response = await profileService.getProfileDetails(this.userId);
    if (response) {
      const imageUrl = await profileService.getFilePreview(response.profilePhoto);
      this.imageUrl = imageUrl;
      this.description = response.description;
    } else {
      console.log("No profile data found");
    }
  } catch (error) {
    console.log("Error fetching profile details:", error);
  }
},


    async loadAllPosts() {
      this.isLoading = true;
      try {
        const response = await postService.getAllPosts(); // Assuming this returns all posts
        this.posts = response.documents.filter(post => post.userId === this.userId); // Filter posts by userId

        // Map image IDs to their URLs
        for (const post of this.posts) {
          post.postUrl = await postService.getFilePreview(post.post);
        }
      } catch (error) {
        console.log("Error loading posts:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.getProfileData();
    this.loadAllPosts();
  }
};
</script>

<style>
.aspect-w-1 {
  position: relative;
  width: 100%;
}

.aspect-h-1 {
  padding-top: 100%;
}

.aspect-w-1 .object-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.custom-bg {
  background-color: #fdfdfd;
}

</style>
