<template>
    <div class="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-gradient-to-b from-white to-gray-100">
      <div class="flex items-center justify-center mb-8">
        <h2 class="text-4xl font-bold text-center text-gray-800">
          <span class="material-icons text-5xl mr-2 text-purple-600">Create</span>
          <span class="relative inline-block">
            <span class="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-25 blur-sm"></span>
            <span class="relative text-gray-900"> a Post</span>
          </span>
        </h2>
      </div>
  
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">Caption</label>
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
        class="w-full py-3 px-4 mb-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-transform transform hover:scale-105"
      >
        Post
      </button>
  
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Upload Photo</label>
        <input
          type="file"
          accept="image/*"
          @change="handleFileChange"
          class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        caption: '',
        image: null
      };
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
      }
    }
  };
  </script>
  
  <style scoped>
  /* Additional styles can be added here if needed */
  </style>
  