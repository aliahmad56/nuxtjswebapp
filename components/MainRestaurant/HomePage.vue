<template>
  <div>
        <HeaderMenu />
    <!-- <h1 class="h1"> {{name}} Welcome to Home page</h1> -->
    <h1 class="h1"> Welcome to Home page</h1>

    <table class="table customtable">
  <thead class="thead-dark">
    <tr>
      <th scope="col">SerialNo</th>
      <th scope="col">Name</th>
      <th scope="col">Location</th>
      <th scope="col">Number</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="dataa in displayName" :key="dataa.id">
        <td>{{dataa.id}}</td>
        <td>{{dataa.name}}</td>

    <td>
        {{dataa.location}}
    </td>
    <td>
        {{dataa.number}}
    </td>
    <td><nuxt-link :to="'/update-restaurant/'+dataa.id">Update</nuxt-link>

</td>
<td>
<button class="btn btn-primary" v-on:click="DeleteRestaurant(dataa.id)">Delete</button>

</td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>
import HeaderMenu from './HeaderMenu.vue'
import { mapGetters, mapActions} from 'vuex'
export default
{
    name:'HomePage',
        components:{
         HeaderMenu
        },
        data(){
            return{
              
               restaurant:[],
                }
          },
       
     async mounted()
    {
    this.fetchItemData();
    },

    computed:{
      //computed property updated data ko yahn import kardega.
      ...mapGetters(["displayName"])
  
      // mapGetter ke through getter ke andar jo function ha usko import karke phir 
      // store se values display/print kar skta ho.
   
    },
    methods:{
//Sab se pehle api ke through server se data fetch hoga aur phir state store ke andar set karenge
      ...mapActions(['Restaurant/fetchItems', 'Restaurant/removeItem']),

      fetchItemData()
      {
        this.$store.dispatch('Restaurant/fetchItems', null, {root:true});
      },
      
        async DeleteRestaurant(id)
      {
        this.removeItem(id);
        },    
},
created() {
    this.fetchItemData();
  }
}
</script>

<style>

.h1{
  margin-top: 20px;
}
</style>