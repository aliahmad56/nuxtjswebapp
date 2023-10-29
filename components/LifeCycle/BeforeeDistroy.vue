<template>
    <div>
      <h1>Event Listener & Timer Example</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Listening for events...',
        timer: null,
      };
    },
    created() {
      // Set up an event listener when the component is created
      this.eventListener = this.handleEvent.bind(this);
      document.addEventListener('custom-event', this.eventListener);
  
      // Start a timer
      this.timer = setInterval(this.updateMessage, 1000);
    },
    beforeDestroy() {
      // Clean up resources before the component is destroyed
      document.removeEventListener('custom-event', this.eventListener);
      clearInterval(this.timer);
    },
    methods: {
      handleEvent(event) {
        this.message = `Received custom event: ${event.detail.message}`;
      },
      updateMessage() {
        this.message = 'Updating message...';
      },
    },
  };
  </script>
  