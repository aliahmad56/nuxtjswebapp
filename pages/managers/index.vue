<template>
    <div>
        <p>Managers: (Nuxt Auth - with jwt token)</p>
        <table v-if="!isLoading">
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Number</th>
            </tr>
            <tbody v-for="item in getRestaurants" :KEY="item">
                <tr>
                    <td>{{  item.name  }}</td>
                    <td>{{ item.location }}</td>
                    <td>{{  item.number  }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <div class="">
                <img class="animate-spin w-10 h-10" src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png" alt="loading" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    // layout: 'user',
    data() {
        return {
            restaurants: [],
            isLoading: true,
        }
    },
    async created() {
        await this.fetchRestaurants()
    },
    computed: {
        ...mapGetters('modules/global', ['getRestaurants'])
    },
    methods: {
        ...mapActions('modules/global', ['index']),

        async fetchRestaurants() {
            const response = await this.index();
            if(response.status === 200) {
                console.log("your 200 respoknse; ", response)
                // this.restaurants = response.data;
            }
            else if(response.status === 404) {
                console.log("NOt found: ", response)
            }
            else if(response.status === 409){
                console.log("conflicst:", response)
            }
            else if(response.status === 500){
                console.log("server error:", response)
            }
            this.isLoading = false;
        }
    }
}
</script>