<template>
    <div>
      <h2>Child Component</h2>
      <p>String data from Parent: {{ stringProp }}</p>
      <p>Array data from Parent:</p>
      <ul>
        <li v-for="item in arrayProp" :key="item">{{ item }}</li>
      </ul>
      <p>Object data from Parent:</p>
      <ul>
        <li v-for="(value, key) in objectProp" :key="key">{{ key }}: {{ value }}</li>
      </ul>

      <button v-on:click="sendDataToParent"
      class="ml-auto mr-5 bg-black text-white p-3 rounded-md pl-6 pr-6 font-medium font-semi bold">Send Data to Parent</button>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      
     },
    props: {
      stringProp: String,
      arrayProp: Array,
      objectProp: Object,
    },

    methods: {
    sendDataToParent() {
      
      setTimeout(() => {
        const success = true; 
        if (success) {
         
          // Notify the parent component
          this.$emit('child-event', 'Data sent from child to parent');
          this.$toasted.success('Data sent successfully');
        } else {
          // Data sending failed, show an error toast
          this.$toasted.error('Error: Internet connectivity issue');
        }
      }, 2000);
    },
  }
  };
  </script>
  