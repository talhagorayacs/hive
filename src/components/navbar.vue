<template>
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <!-- Instagram Logo Text -->
          <a href="#" class="flex items-center text-2xl font-semibold dark:text-white">
            Instagram
          </a>
  
          <!-- Search Bar (Hidden on small screens) -->
          <div class="hidden lg:flex flex-grow max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search"
              class="w-full p-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
  
          <!-- Navbar Icons with Font Awesome -->
          <div class="flex items-center space-x-4 lg:space-x-12">
            <!-- Home Icon -->
            <a href="#" class="text-xl text-gray-500 dark:text-white">
              <i class="fas fa-home"></i>
            </a>
  
            <!-- Message Icon -->
            <a href="#" class="text-xl text-gray-500 dark:text-white">
              <i class="fas fa-paper-plane"></i>
            </a>
  
            <!-- Add Post Icon -->
            <a href="#" class="text-xl text-gray-500 dark:text-white">
              <i class="fas fa-plus-square"></i>
            </a>
  
            <!-- Explore Icon -->
            <a href="#" class="text-xl text-gray-500 dark:text-white">
              <i class="fas fa-compass"></i>
            </a>
  
            <!-- Like Icon -->
            <a href="#" class="text-xl text-gray-500 dark:text-white">
              <i class="fas fa-heart"></i>
            </a>
  
            <!-- Profile Picture -->
            <div class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
              <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
            </div>
          </div>
        </div>
  
        <!-- Mobile Search Bar (Visible on small screens) -->
        <div class="lg:hidden flex-grow max-w-md mx-auto mt-2">
          <input
            type="text"
            placeholder="Search"
            class="w-full p-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  /* Tailwind CSS classes are used directly in the template, so no additional CSS is needed */
  </style>
  