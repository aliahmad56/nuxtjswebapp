<template>
    <div>
      <h1>Dynamic List</h1>
      <ul ref="itemList">
        <li v-for="item in items" :key="item.id">{{ item.text }}</li>
      </ul>
      <button @click="addItem">Add Item</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
      };
    },
    methods: {
      addItem() {
        // adding a new item
        const newItem = {
          id: this.items.length + 1,
          text: `Item ${this.items.length + 1}`,
        };
        this.items.push(newItem);
      },
    },
    updated() {
      // Scroll to the bottom of the list when the component updates
      const itemList = this.$refs.itemList;
      itemList.scrollTop = itemList.scrollHeight;
    },
  };
  </script>
  