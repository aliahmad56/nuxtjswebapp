<template>
    <div>
      <h1>Timer Example</h1>
      <p>Elapsed Time: {{ elapsedTime }} seconds</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        elapsedTime: 0,
        timer: null,
      };
    },
    created() {
      // Start a timer when the component is created
      this.timer = setInterval(this.updateTime, 1000);
    },
    methods: {
      updateTime() {
        // Update the elapsed time every second
        this.elapsedTime++;
      },
    },
    destroyed() {
      // Clear the timer when the component is destroyed
      clearInterval(this.timer);
    },
  };
  </script>
  