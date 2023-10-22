<template>  
  <div>
    <HeaderMenu />
    <form class="formstyle" @submit.prevent="UpdatedData(restaurant.id)">
  <div class="custom">
  <input type="text" class="custom2" v-model="restaurant.name" placeholder="Enter your Restaurant Name">
  </div>
  <div class="custom">
  <input type="text" class="custom2" v-model="restaurant.location" placeholder="Enter your Location">
  </div>
  <div class="custom">
  <input type="text" class="custom2" v-model="restaurant.number" placeholder="Enter your Phone Number">
  </div>
  <button class="btn btn-primary custom3" type="submit" >Update Restaurant</button><br><br>
  <!-- v-on:click="UpdatedData(restaurant.id)" -->
  </form>
  </div>
  </template>
  <script>
  import HeaderMenu from './HeaderMenu.vue'
  import axios from 'axios'
  import { mapActions } from 'vuex'
  export default
  {
  name:'UpdateRestaurant',
    components:{
     HeaderMenu
    },
  
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
      ...mapActions(["NewUpdatedData"]),
  
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
        
      this.$router.push({name: 'HomePage'});
             
    }
    }
  }
  }
  </script>
  
  <style>
  .customtable{
  margin-top:80px;
  margin-left: 30px;
  margin-right: 30px;
  width: 1300px;
  
  border: solid 1px black;
  }
  
  .custom3{
  width:200px;
  height: 50px;
  color: black;
  }
  
  </style>