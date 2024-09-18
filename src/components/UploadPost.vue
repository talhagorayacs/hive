<template>
  <Loader :isLoading="isLoading" />
  <div class="w-full max-w-2xl mx-auto p-12 rounded-lg shadow-lg bg-gradient-to-b from-white to-gray-100">
    <div class="flex items-center justify-center mb-8">
      <h2 class="text-4xl font-bold text-center text-gray-800">
        <span class="relative inline-block">
          <span class="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-25 blur-sm"></span>
          <span class="relative text-gray-900">Create a Post</span>
          <span class="material-icons text-5xl mr-4 text-purple-800">edit</span>
        </span>
      </h2>
    </div>

    <div class="mb-6">
      <label class="block text-lg font-medium text-gray-700 mb-2">Caption</label>
      <textarea
        v-model="caption"
        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-200 focus:ring-opacity-50 cursor-text"
        placeholder="Write a caption..."
        rows="4"
      ></textarea>
    </div>

    <div class="mb-6">
      <div class="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 overflow-hidden">
        <img v-if="image" :src="image" alt="Preview" class="w-full h-full object-contain" />
        <span v-else class="text-gray-400">Image Preview</span>
      </div>
    </div>

    <button
      @click="uploadPost"
      class="w-full py-3 px-4 mb-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-transform transform hover:scale-105"
    >
      Post
    </button>

    <div>
      <label class="block text-lg font-medium text-gray-700 mb-2">Upload Photo</label>
      <input
        type="file"
        accept="image/*"
        @change="handleFileChange"
        ref="fileInput"
        class="block w-full text-lg text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-lg file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all"
      />
    </div>
  </div>
</template>

<script>
import postService from '../appwrite/service';
import { mapGetters } from 'vuex';
import Loader from '../components/Loader.vue';

export default {
  components: {
    Loader,
  },
  data() {
    return {
      caption: '',
      image: '',
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['userData']),
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.image = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async uploadPost() {
      this.isLoading = true;
      try {
        const file = this.$refs.fileInput.files[0];
        if (file) {
          const uploadedFile = await postService.uploadImage(file);
          if (uploadedFile) {
            const userData = this.userData;
            await postService.createPost({
              caption: this.caption,
              post: uploadedFile.$id,
              userId: userData.$id,
              userName: userData.name,
            });
            this.$router.push("/");
          }
        }
      } catch (error) {
        console.log("Error in creating post:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
