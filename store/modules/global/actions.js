export default{
  async index({ commit }) {
    try {
      const response = await this.$axios.get('restaurant');
      commit('setRestaurants', response);
      return response;
    }
    catch(error) {
      return error.response;
    }
  },       
}