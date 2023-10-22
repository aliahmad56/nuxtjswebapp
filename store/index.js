
// import Vue from 'vue';
import Vue from 'vue';
import Vuex from 'vuex';
import Restaurant from './modules/Restaurant';

Vue.use(Vuex);

export const createStore = () => {
  return new Vuex.Store({
    modules: {
     
      Restaurant,
    
    },
  });
};


