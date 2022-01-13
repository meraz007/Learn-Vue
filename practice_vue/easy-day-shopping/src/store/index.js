import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inventory:[],
    cart:[]
  },
  getters:{
    getInventory(state){
      return state.inventory
    },
    getCart(state){
      return state.cart
    }
  },
  mutations: {
    addToCart(state,payload){
      state.cart.push(payload)
    },
    setInventory(state,payload){
      state.inventory=payload
    }
  },
  actions: {},
  modules: {},
});
