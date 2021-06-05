import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

/* eslint-disabled */

const apiURL = "http://localhost:8000/api"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    user: {}
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_NAME(state, user_name){
      state.user.name = user_name
    }
  },
  actions:{
    getLetterbyCode(state, code){
      return axios.get(`${apiURL}/letter/${code}`)
    },
    postLetterbyCode(state, payload){
      return axios.post(`${apiURL}/letter/`, payload)
    },
    postAttend(state, payload){
      return axios.post(`${apiURL}/attend/`, payload)
    },
    postCheer(state, payload){
      return axios.post(`${apiURL}/cheer/`, payload)
    },
    postFunding(state, payload){
      return axios.post(`${apiURL}/funding/`, payload)
    },
    postSubscriber(state, payload){
      return axios.post(`${apiURL}/subscriber/`, payload)
    },
    getFunFact(){
      console.log('getFunFact')
    }
  }
})
