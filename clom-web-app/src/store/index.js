import Vue from 'vue';
import Vuex from 'vuex';
import { drawer } from './modules/drawer';
import { auth } from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    drawer,
    auth
  }
});