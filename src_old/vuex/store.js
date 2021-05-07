import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store( options: {
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    }
  },
  actions: {
    GET_PRODUCTS({commit}) {
      return axios('http://localhost:3000/products', {
        method: "GET"
      }) AxiosPromise<any>
        .then((products: AxiosResponse<any>) => {
          commit('SET_PRODUCTS', products);
          return products;
        }) Promise<AxiosResponse<any>>
        .catch((error) => {
          console.log(error)
        })
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    }
  }
});

export default store;
