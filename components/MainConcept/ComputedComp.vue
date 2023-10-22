<template>
    <div>
      <h1>Computed Property Example</h1>
      <p>First Name: {{ firstName }}</p>
      <p>Last Name: {{ lastName }}</p>
      <p>Full Name: {{ fullName }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: 'Ali',
        lastName: 'Ahmad',
      };
    },
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      },
    },
  };
  </script>
  