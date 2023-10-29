<template>
  <div class="bg-blue-300	">
  <HeaderMenu />
  <h2 class="text-center mt-7">Enter Your Details to add your Restaurant</h2>
  <div class="min-h-screen flex items-center justify-center ">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2"  @submit.prevent="AddingData()">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="restaurantName">
          Enter your Restaurant Name
        </label>
        <input v-model="newItem.name"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Restaurant Name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
          Enter your Location
        </label>
        <input  v-model="newItem.location" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Location">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="phoneNumber">
          Enter your Phone number
        </label>
        <input v-model="newItem.number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone Number">
      </div>
      <div class="flex items-center justify-between">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Restaurant
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import HeaderMenu from "./HeaderMenu.vue";
import { mapActions } from "vuex";
export default {
  name: "AddRestaurant",
  components: {
    HeaderMenu,
  },
  data() {
    return {
      newItem: {
        name: "",
        location: "",
        number: "",
      },
    };
  },

  methods: {
    ...mapActions('modules/Restaurant', ['addItem']),

    async AddingData() {
      //  e.preventDefault();
      const response = await this.addItem({
        name: this.newItem.name,
        location: this.newItem.location,
        number: this.newItem.number,
      });

      if (response.status === 201) {
        this.$router.push( "home-page");
      }
    },
  },
};
</script>

<style>

</style>