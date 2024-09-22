<template>
  <Loader :isLoading="isLoading" />
  <div class="relative bg-white mx-auto min-h-screen mt-16 pt-16">
    <div class="max-w-[48rem] mx-auto">
      <div v-for="post in posts" :key="post.$id" class="bg-white p-8 rounded-lg shadow-md mb-8">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-2">
            <img
              src="https://images.pexels.com/photos/28218520/pexels-photo-28218520/free-photo-of-people-walking-down-a-street-at-night-with-red-lights.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="User Avatar"
              class="w-12 h-12 rounded-full"
            />
            <div>
              <p class="text-gray-800 font-semibold">{{ post.userName }}</p>
              <p class="text-gray-500 text-sm">{{ formatTime(post.$createdAt) }}</p>
            </div>
          </div>
          <div class="relative">
            <button @click="toggleDropdown(post.$id)" class="text-gray-500 hover:bg-gray-100 rounded-full p-1">
              <i class="fas fa-ellipsis-v"></i>
            </button>
            <div v-if="dropdownOpen === post.$id" class="absolute right-0 mt-2 w-44 z-10 bg-white divide-y divide-gray-200 rounded-lg shadow-lg">
              <ul class="py-2 text-sm text-gray-700">
                <li>
                  <button class="block px-4 py-2 hover:bg-gray-100">Profile</button>
                </li>
                <li>
                  <button @click="deletePost(post.$id)" class="block px-4 py-2 hover:bg-gray-100">Delete Post</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <p class="text-gray-800">{{ post.caption }}</p>
        </div>
        <div class="mb-4">
          <img
            :src="post.imageUrl" 
            alt="Post Image"
            class="w-full max-h-[80vh] object-contain rounded-md"
            @error="this.src='fallback-image-url.jpg'" 
          />
        </div>
        <div class="flex items-center justify-between text-gray-500">
          <button class="flex items-center space-x-2 px-2 hover:bg-gray-50 rounded-full p-1">
            <i class="fas fa-heart"></i>
            <span>{{ post.likes }} Likes</span>
          </button>
          <button class="flex items-center space-x-2 px-2 hover:bg-gray-50 rounded-full p-1">
            <i class="fas fa-comment"></i>
            <span>{{ post.comments }} Comments</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postService from '../appwrite/service';
import Loader from './Loader.vue';

export default {
  name: 'Posts',
  components: {
    Loader
  },
  data() {
    return {
      posts: [],
      dropdownOpen: null,
      isLoading: false
    };
  },
  methods: {
    async loadAllPosts() {
  this.isLoading = true;
  try {
    const response = await postService.getAllPosts();
    console.log('Response from getProfileDetails:', response);

    this.posts = response.documents;

    // Map image IDs to their URLs and convert createdAt to Date object
    for (const post of this.posts) {
      const imageUrl = await postService.getFilePreview(post.post);
      post.imageUrl = imageUrl; // Add the URL to the post object
      post.$createdAt = new Date(post.$createdAt); // Convert to Date object
    }

    // Sort posts by creation time in descending order
    this.posts.sort((a, b) => b.$createdAt - a.$createdAt);
    
    console.log(this.posts);
  } catch (error) {
    console.log("Error loading posts:", error);
  } finally {
    this.isLoading = false;
  }
}
,

    formatTime(date) {
      const now = new Date();
      const seconds = Math.floor((now - date) / 1000);
      if (seconds < 60) return 'Posted just now';
      if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
      if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
      return `${Math.floor(seconds / 86400)} days ago`;
    },

    async deletePost(postId) {
      this.isLoading = true;
      try {
        await postService.deletePost(postId);
        this.loadAllPosts();
      } catch (error) {
        console.log("Error deleting post:", error);
      } finally {
        this.isLoading = false;
      }
    },

    toggleDropdown(postId) {
      this.dropdownOpen = this.dropdownOpen === postId ? null : postId;
    },
  },
  created() {
    this.loadAllPosts();
  },
};
</script>
