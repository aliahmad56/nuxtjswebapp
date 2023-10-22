<template>
  <div>
  <HeaderMenu />
  <h2>Enter Your Details to add your Restaurant</h2>
  <form class="formstyle" @submit.prevent="AddingData()">
    <div class="custom">
      <input
        type="text"
        class="custom2"
        v-model="newItem.name"   
        
        placeholder="Enter your Restaurant Name"
      />
    </div>

    <div class="custom">
      <input
        type="text"
        class="custom2"
        v-model="newItem.location"
        placeholder="Enter your Location"
      />
    </div>

    <div class="custom">
      <input
        type="text"
        class="custom2"
        v-model="newItem.number"
        placeholder="Enter your Phone Number"
      />
    </div>

    <button class="btn btn primary custom3" type="submit">
      Add Restaurant
    </button>
  </form>
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
    ...mapActions(["addItem"]),

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
.custom {
  margin-top: 20px;
}

.custom2 {
  height: 40px;
  color: black;
  border: 0.5px solid black;
  text-align: center;
  width: 500px;
}
.formstyle {
  margin-top: 70px;
}

.custom3 {
  width: 150px;
  height: 50px;
  color: black;
}
</style>