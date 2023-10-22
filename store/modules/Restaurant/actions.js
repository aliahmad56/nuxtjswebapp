import axios from "axios";
export default{
    async fetchItems({ commit }) {
        const response = await axios.get('http://localhost:5000/restaurant');
        commit('setItems', response.data);
      },

      async addItem({ commit }, newItem ) {  
     
        const response = await axios.post('http://localhost:5000/restaurant', newItem);
        commit('addItem', response.data);
       return response;
      },
       
      async removeItem({ commit }, itemId) {
        await axios.delete(`http://localhost:5000/restaurant/${itemId}`);
        commit('removeItem', itemId);
      },

      async NewUpdatedData({ commit }, payload) {
        const { id, result } = payload;
        try{
          const response= await axios.put(`http://localhost:5000/restaurant/${id}`, result);
          commit('newitemupdate', {id,  result });
          return response;
        }
        catch(error){
          console.error('Error updating restaurant:', error);

        }
        
      },
        
}