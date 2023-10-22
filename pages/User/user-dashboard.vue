<template>
    <div>
        <h1>Welcome to the User Dashboard</h1>
        <UserLayout></UserLayout>
     </div>

   </template>
   <script>
   import UserLayout from "../../layouts/UserLayout.vue"
   export default {
      name: 'user-dasboard',
       components:{
        UserLayout,
   }, 
       data(){
        return{
           
        }
   },
   }
   
   </script>
   