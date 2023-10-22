<template>
    <div>
     <h1 class="text-center text-black font-large font-bold text-4xl mt-7">
        Life Cycle Methods</h1>
    </div>
</template>

<script>  

export default {
    data(){
     return{
        
     }
},
beforeCreate() {
   console.log('1. Before Create Life Cycle');
},

created() {
    console.log('2. Create Life Cycle');
},
beforeMount() {
    console.log('3. BeforeMount Life Cycle');
},


mounted() {
    console.log('4. Mounted Life Cycle');
},

beforeUpdate() {
    console.log('5. BeforeUpdate Life Cycle');
},
updated() {
    console.log('6. Update Life Cycle');
},

beforeDestroy() {
    console.log('6. Before Distroy Life Cycle');
  },

  destroyed() {
    console.log('6.Distroy Life Cycle'); 
 }
}
</script>