<template>
  <div v-if="isLoading" class="loader-overlay">
    <v-progress-circular
      color="primary"
      indeterminate
      class="loader-spinner"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2); /* Slightly dark transparent background to enhance blur effect */
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px); /* Apply blur effect */
  z-index: 9999; /* Ensure it sits above other content */
}

.loader-spinner {
  width: 100px;
  height: 100px;
  border: 8px solid rgba(255, 255, 255, 0.3); /* Semi-transparent border */
  border-top: 8px solid #007bff; /* Bright blue spinner color */
  border-radius: 50%;
  animation: spin 1s linear infinite; /* Add spinning animation */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
