<template>
    <div>
      <h1 class="text-center mt-5 text-xl">Watcher Example</h1>
    
      <input v-model="message" placeholder="Enter a message" class="mx-auto flex border text-center" />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: '',
      };
    },
    watch: {
      message(newValue, oldValue) {
        // This function will be called whenever the 'message' data property changes
        console.log(`New Value: ${newValue}`);
        console.log(`Old Value: ${oldValue}`);
      },
    },
  };
  </script>
  