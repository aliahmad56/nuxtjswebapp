<template>
    <div>
      <h1>User Information Form</h1>
      <form>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" @input="logChanges('name')" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" @input="logChanges('email')" />
        </div>
        <div>
          <label for="age">Age:</label>
          <input type="number" id="age" v-model="formData.age" @input="logChanges('age')" />
        </div>
      </form>
      <div>
        <h2>Changes Log</h2>
        <ul>
          <li v-for="change in changes" :key="change.key">
            <strong>{{ change.key }}:</strong> {{ change.value }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          age: null,
        },
        changes: [],
      };
    },
    methods: {
      logChanges(fieldName) {
        // Log changes to the form fields
        this.changes.push({ key: fieldName, value: this.formData[fieldName] });
        
      },
    },
    beforeUpdate() {
      // Reset the changes log just before the component updates
      this.changes = [];
    },
  };
  </script>
  