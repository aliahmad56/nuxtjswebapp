export default{
    setItems(state, restaurantname) {
        state.restaurantname = restaurantname;
      },

      addItem(state, item) {
      //  state.restaurantname.Vueset(item);              Is trah se bi tum kar skte ho.
      state.restaurantname= [item, ...state.restaurantname];
      },

      removeItem(state, itemId) {
        state.restaurantname = state.restaurantname.filter(restaurantname => restaurantname.id !== itemId);
      },

      newitemupdate(state, {itemId, alldata}){
        const index = state.restaurantname.findIndex(restaurantname => restaurantname.id == itemId);
        if (index !== -1) {
          state.restaurantname[index] = { ...state.restaurantname[index], ...alldata };
          //In JavaScript, when findIndex() doesn't find any element in the array that 
          //satisfies the specified condition, it returns -1.
        }
      }


}