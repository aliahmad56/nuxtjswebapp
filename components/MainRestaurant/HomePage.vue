<template>
  <div>
        <HeaderMenu />
    <h1 class="text-center pt-7"> Welcome to Home page</h1>
     <!-- Tailwind Table Start -->
     <div class=" mt-6">
    <table class=" mx-auto w-9/12	 divide-gray-200">
      <thead class="mx-auto">
        <tr class="bg-teal-900">
          <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">
            SerialNo
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">
            Name
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">
            Location
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">
            Number
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">
            Update
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border">
            Delete
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <!-- table data rows here -->
        <tr v-for="dataa in displayName" :key="dataa.id">
          <td class="px-6 py-4 whitespace-nowrap border">{{dataa.id}}</td>
          <td class="px-6 py-4 whitespace-nowrap border">{{dataa.name}}</td>
          <td class="px-6 py-4 whitespace-nowrap border"> {{dataa.location}}</td>
          <td class="px-6 py-4 whitespace-nowrap border">{{dataa.number}}</td>
          <td class="px-6 py-4 whitespace-nowrap border">
            <button class="text-indigo-600 hover:text-indigo-900">
              <nuxt-link :to="'/RestaurantData/update-restaurant/' + dataa.id">Update</nuxt-link>

              <!-- <nuxt-link :to="'update-restaurant/' + dataa.id">Update</nuxt-link> -->
            </button>
          </td>
          <td class="px-6 py-4 whitespace-nowrap border">
            <button class="text-red-600 hover:text-red-900" v-on:click="DeleteRestaurant(dataa.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

     <!-- End Here -->
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
      ...mapGetters({displayName: "modules/Restaurant/displayName"}),
  
      // mapGetter ke through getter ke andar jo function ha usko import karke phir 
      // store se values display/print kar skta ho.
   
    },
    methods:{
//Sab se pehle api ke through server se data fetch hoga aur phir state store ke andar set karenge
      ...mapActions(['modules/Restaurant/fetchItems', 'modules/Restaurant/removeItem']),

      fetchItemData()
      {
        this.$store.dispatch('modules/Restaurant/fetchItems', null, {root:true});
      },
      
        async DeleteRestaurant(id)
      {
        console.log(id);
        await this.$store.dispatch('modules/Restaurant/removeItem', id, { root: true });

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