<template>
    <div>
      <h1>User Profile</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <p>Name: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Location: {{ user.location }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null,
        loading: true,
      };
    },
    beforeCreate() {
   
      this.user = {
        name: 'Loading...',
        email: 'Loading...',
        location: 'Loading...',
      };
  
      setTimeout(() => {
        this.user = {
          name: 'John Doe',
          email: 'john@example.com',
          location: 'New York',
        };
        this.loading = false;
      }, 2000); 
    },
  };
  </script>
  