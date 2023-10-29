<template>  
  <div class="bg-blue-300	">
    <div class="min-h-screen flex items-center justify-center ">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2"  @submit.prevent="UpdatedData(restaurant.id)">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="restaurantName">
          Update your Restaurant Name
        </label>
        <input  v-model="restaurant.name"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Restaurant Name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
          Update your Location
        </label>
        <input  v-model="restaurant.location" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Location">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="phoneNumber">
          Update your Phone number
        </label>
        <input v-model="restaurant.number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone Number">
      </div>
      <div class="flex items-center justify-between">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Update Restaurant
        </button>
      </div>
    </form>
  </div>
  </div>
  </template>
  <script>
  import axios from 'axios'
  import { mapActions } from 'vuex'
  export default
  {
  name:'UpdateRestaurant',
  
      data(){
        return{
            value: 'sno',
           restaurant:{
  
           },
            }
      },
   
  async mounted()
  {
 
  let result= await axios.get('http://localhost:5000/restaurant/'+this.$route.params.id);
  console.log(result);
  this.restaurant=result.data;
  },
  
  methods:{
    ...mapActions('modules/Restaurant', ['NewUpdatedData']),
  
      async UpdatedData(id)
      {
  
      const result ={
        name: this.restaurant.name,
        location: this.restaurant.location,
        number: this.restaurant.number,
        
      };
     
      const response= await this.NewUpdatedData({ id, result });
  
      if (response.status==200)
        { 
      this.$router.push( "/RestaurantData/home-page");
             
    }
    }
  }
  }
  </script>
 