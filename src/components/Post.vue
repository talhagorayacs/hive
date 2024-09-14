<template>
  <!-- Main container -->
  <div class="relative bg-white mx-auto min-h-screen mt-16">
    <!-- Post card -->
    <div class="bg-white p-8 rounded-lg shadow-md max-w-[48rem] mx-auto">
      <!-- User Info with Three-Dot Menu -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <img src="https://images.pexels.com/photos/28218520/pexels-photo-28218520/free-photo-of-people-walking-down-a-street-at-night-with-red-lights.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Avatar" class="w-12 h-12 rounded-full">
          <div>
            <p class="text-gray-800 font-semibold">John Doe</p>
            <p class="text-gray-500 text-sm">Posted 2 hours ago</p>
          </div>
        </div>
        <div class="text-gray-500 cursor-pointer">
          <!-- Three-dot menu icon -->
          <button class="hover:bg-gray-50 rounded-full p-1">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
      <!-- Message -->
      <div class="mb-4">
        <p class="text-gray-800">
          Just another day with adorable kittens! 🐱 
          <a href="#" class="text-blue-600">#CuteKitten</a>
          <a href="#" class="text-blue-600">#AdventureCat</a>
        </p>
      </div>
      <!-- Image -->
      <div class="mb-4">
        <img src="https://images.pexels.com/photos/28218520/pexels-photo-28218520/free-photo-of-people-walking-down-a-street-at-night-with-red-lights.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Post Image" class="w-full h-[600px] object-cover rounded-md"> <!-- Updated height -->
      </div>
      <!-- Like and Comment Section -->
      <div class="flex items-center justify-between text-gray-500">
        <div class="flex items-center space-x-2">
          <button class="flex items-center space-x-2 px-2 hover:bg-gray-50 rounded-full p-1">
            <i class="fas fa-heart"></i>
            <span>42 Likes</span>
          </button>
        </div>
        <button class="flex items-center space-x-2 px-2 hover:bg-gray-50 rounded-full p-1">
          <i class="fas fa-comment"></i>
          <span>3 Comments</span>
        </button>
      </div>
      <hr class="my-2">
      <p class="text-gray-800 font-semibold">Comments</p>
      <hr class="my-2">
      <div class="mt-4">
        <!-- Comment 1 -->
        <div class="flex items-center space-x-2">
          <img src="https://images.pexels.com/photos/28218520/pexels-photo-28218520/free-photo-of-people-walking-down-a-street-at-night-with-red-lights.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Avatar" class="w-6 h-6 rounded-full">
          <div>
            <p class="text-gray-800 font-semibold">Jane Smith</p>
            <p class="text-gray-500 text-sm">Lovely shot! 📸</p>
          </div>
        </div>
        <!-- Comment 2 -->
        <div class="flex items-center space-x-2 mt-2">
          <img src="https://images.pexels.com/photos/28218520/pexels-photo-28218520/free-photo-of-people-walking-down-a-street-at-night-with-red-lights.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Avatar" class="w-6 h-6 rounded-full">
          <div>
            <p class="text-gray-800 font-semibold">Bob Johnson</p>
            <p class="text-gray-500 text-sm">I can't handle the cuteness! Where can I get one?</p>
          </div>
        </div>
        <!-- Reply from John Doe with indentation -->
        <div class="flex items-center space-x-2 mt-2 ml-6">
          <img src="https://images.pexels.com/photos/28218520/pexels-photo-28218520/free-photo-of-people-walking-down-a-street-at-night-with-red-lights.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Avatar" class="w-6 h-6 rounded-full">
          <div>
            <p class="text-gray-800 font-semibold">John Doe</p>
            <p class="text-gray-500 text-sm">That little furball is from a local shelter. You should check it out! 🏠😺</p>
          </div>
        </div>
        <!-- Add more comments and replies as needed -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMediaPost'
}
</script>

<style scoped>
/* Additional styling if needed */
</style>
