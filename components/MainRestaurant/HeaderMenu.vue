<template>
    <div class="nav">
        <!-- <nuxt-link :to="home-page">Home</nuxt-link> -->
        <!-- <nuxt-link :to="add-restaurant">Add Restaurant</nuxt-link> -->

        <!-- <a class="anchor" v-on:click="Logout">Logout</a> -->
        
    </div>
    </template>
    <script>
   
    
    export default{
        name:'HeaderMenu',
          
        methods: {
        }
    }
    </script>
    
    <style>
    
    .nav{
       
        background-color: #333;
        overflow: hidden;
    }
    
    .nav a{
        float: left;
        color: #f2f2f2f2;
        padding: 14px 16px;
        
        font-size: 17px;
        text-decoration:none;
        margin-right: 5px;
        margin-left: 50px;
    }
    
    .nav a:hover{
        background: #ddd;
        color: #333;
    }
    .anchor{
    color: red
    }
    
    </style>

