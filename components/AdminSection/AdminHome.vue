
<template>
  <AdminLayout>

    <div class="container mx-auto pt-10">
       
       <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       
         <div class="bg-red-500 p-4 shadow-lg rounded-lg text-white">
           <h2 class="text-2xl font-semibold mb-2">Card 1</h2>
           <p class="text-base">This is the content of Card 1.</p>
         </div>

      
         <div class="bg-green-500 p-4 shadow-lg rounded-lg text-white">
           <h2 class="text-2xl font-semibold mb-2">Card 1</h2>
           <p class="text-base">This is the content of Card 1.</p>
         </div>

        
         <div class="bg-yellow-500 p-4 shadow-lg rounded-lg text-white">
           <h2 class="text-2xl font-semibold mb-2">Card 1</h2>
           <p class="text-base">This is the content of Card 1.</p>
         </div>

         
         <div class="bg-blue-500 p-4 shadow-lg rounded-lg text-white">
           <h2 class="text-2xl font-semibold mb-2">Card 1</h2>
           <p class="text-base">This is the content of Card 1.</p>
         </div>
       </div>
     </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "../../layouts/AdminLayout.vue"
export default {
    components:{
        AdminLayout
    }

}
</script>

<style>

</style>