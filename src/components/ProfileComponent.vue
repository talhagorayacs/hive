<template>
  <div class="mb-11">
    <header class="flex flex-col items-center justify-center pt-10">
      <!-- Profile Section -->
      <div class="flex flex-col md:flex-row items-center md:items-start justify-center max-w-4xl w-full px-4 md:px-0">
        <!-- Profile Picture and Info Section -->
        <div class="flex items-center md:items-start mb-6 md:mb-0 md:mr-6">
          <!-- Profile Picture -->
          <div class="relative flex-shrink-0 md:mr-6">
            <img  alt="profile-logo" class="w-24 h-24 md:w-36 md:h-36 rounded-full border border-gray-300" />
            <!-- Edit button -->
          <button  class="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 mb-2 mr-2">
            <router-link to="/uploadProfile"> <i class="fas fa-pencil-alt"></i></router-link> 
            </button>
          </div>
        </div>
        <!-- Profile Info -->
        <div class="flex flex-col justify-center md:ml-16 text-center md:text-left">
          <div class="flex flex-col md:flex-row items-center mb-4">
            <h2 class="text-2xl font-light mr-0 md:mr-4"> userName </h2>
            <button @click="followUser" class="bg-blue-500 text-white px-4 py-2 rounded mt- md:mt-0 md:ml-6">Follow</button>
          </div>
          <div class="flex justify-center md:justify-start mb-4">
            <ul class="flex space-x-6 md:space-x-10">
              <li class="text-lg font-normal"><span class="font-semibold">722</span> posts</li>
              <li class="text-lg font-normal"><span class="font-semibold">25.1m</span> followers</li>
              <li class="text-lg font-normal"><span class="font-semibold">6</span> following</li>
            </ul>
          </div>
          <div class="text-left">
            <h1 class="text-2xl md:text-3xl font-semibold mb-2"> userName </h1>
            <span class="font-normal leading-6">
               profileDescription 
             
            </span>
          </div>
        </div>
      </div>
    </header>
    
  </div>
</template>




