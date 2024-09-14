<template>
    <div class="mb-11">
      <header class="flex flex-col items-center justify-center pt-10">
        <!-- Profile Section -->
        <div class="flex items-start justify-center max-w-4xl w-full">
          <!-- Profile Picture and Info Section -->
          <div class="flex items-start">
            <!-- Profile Picture -->
            <div class="flex-shrink-0 mr-6">
              <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg" alt="profile-logo" class="w-36 h-36 rounded-full border border-gray-300" />
            </div>
            <!-- Profile Info -->
            <div class="flex ml-16 flex-col justify-center">
              <div class="flex items-center mb-4">
                <h2 class="text-2xl font-light mr-4">apple</h2>
                <button @click="followUser" class="bg-blue-500 text-white px-4 py-2 rounded">Follow</button>
              </div>
              <div class="flex justify-center mb-4">
                <ul class="flex space-x-10">
                  <li class="text-lg font-normal"><span class="font-semibold">722</span> posts</li>
                  <li class="text-lg font-normal"><span class="font-semibold">25.1m</span> followers</li>
                  <li class="text-lg font-normal"><span class="font-semibold">6</span> following</li>
                </ul>
              </div>
              <!-- Description Section aligned to start -->
              <div class="text-left">
                <h1 class="text-3xl font-semibold mb-2">apple</h1>
                <span class="font-normal leading-6">
                  Everyone has a story to tell.
                  <br />
                  Tag <a href="#" class="text-blue-600">#ShotoniPhone</a> to take part.
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    methods: {
      followUser() {
        // Implement follow functionality here
        alert('Follow button clicked!');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS classes are used directly in the template, so no additional CSS is needed */
  </style>
  