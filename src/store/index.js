import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({

  state: {
    //empi
    jcCode: "",
    //inHospitalId
    zyCode: "",
    //visitType
    typeCode: ""
  },
  getters: {
    getjcCode: function (state) {
      return state.jcCode
    },
    getzyCode: function (state) {
      return state.zyCode
    },
    gettypeCode: function (state) {
      return state.typeCode
    }
  },
  mutations: {
    setjcCode: function (state, code) {
      state.jcCode = code
    },
    setzyCode: function (state, code) {
      state.zyCode = code
    },
    settypeCode: function (state, code) {
      state.typeCode = code
    }
  }
});

export default store
