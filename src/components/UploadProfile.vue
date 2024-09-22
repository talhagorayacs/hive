<template>
  <Loader :isLoading/>
  <div class="w-full max-w-2xl mx-auto p-12 rounded-lg shadow-lg bg-gradient-to-b from-white to-gray-100">
    <div class="flex items-center justify-center mb-8">
      <h2 class="text-4xl font-bold text-center text-gray-800">
        <span class="relative inline-block">
          <span class="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-25 blur-sm"></span>
          <span class="relative text-gray-900">Update Profile</span>
        </span>
      </h2>
    </div>

    <div class="mb-6">
      <label class="block text-lg font-medium text-gray-700 mb-2">Description</label>
      <textarea v-model="description" class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-400"></textarea>
    </div>

    <div class="mb-6">
      <div class="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 overflow-hidden">
        <img v-if="image" :src="image" alt="Preview" class="w-full h-full object-contain" />
        <span v-else class="text-gray-400">Image Preview</span>
      </div>
    </div>

    <button @click="updateProfile" class="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg">
      Update Profile
    </button>

    <div>
      <label class="block text-lg font-medium text-gray-700 mb-2">Upload Photo</label>
      <input type="file" @change="handleFileChange" class="block w-full text-lg text-gray-500">
    </div>
  </div>
</template>

<script>
import profileService from "../appwrite/profileService";
import { mapGetters } from "vuex";
import Loader from './Loader.vue'
export default {
  name: 'UploadProfile',
  components:{
    Loader
  },
  data() {
    return {
      isLoading :false,
      description: '',  // Description input
      image: null,      // For image preview
      file: null,       // Holds the selected image file
    };
  },
  computed: {
    ...mapGetters("auth", ["userData"]), // Getting userData from Vuex
  },
  methods: {
    handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (!allowedTypes.includes(file.type)) {
      alert('Please upload an image file (jpg, png, gif).');
      return;
    }

    if (file.size > maxSize) {
      alert('File size should be less than 5 MB.');
      return;
    }

    this.file = file;
    this.image = URL.createObjectURL(file);
  }
},

async updateProfile() {
  this.isLoading = true; // Set loading state
  try {
    // Call deleteOldData before creating or updating the profile
    await profileService.deleteOldData(this.userData.$id);

  // Upload the profile image if selected
let profilePhoto = null;
if (this.file) {
    const uploadResponse = await profileService.uploadProfileImage(this.file);
    profilePhoto = uploadResponse.$id; // Now this should work
}


    // Create or update the profile in Appwrite
    await profileService.createOrUpdateProfile({
      userId: this.userData.$id,  // Fetching userId from Vuex
      userName: this.userData.name, // Fetching userName from Vuex
      description: this.description,
      profilePhoto, // Only include profilePhoto if uploaded
    });

    this.$router.push('/')
  } catch (error) {
    console.error("Error updating profile:", error);
  } finally {
    this.isLoading = false; // Reset loading state
  }
}
,

beforeDestroy() {
  if (this.image) {
    URL.revokeObjectURL(this.image); // Clean up the object URL
  }
}

  }
};
</script>
