import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({

  state: {
    
    codeEmpi: "",
    codeVisitType: "",
    codePatientId: "",
    codeInHospitalId: ""
  },
  getters: {
    /** 新增加 */
    getCodeEmpi: function (state) {
      return state.codeEmpi
    },
    getCodeVisitType : function (state) {
      return state.codeVisitType
    },
    getCodePatientId: function (state) {
      return state.codePatientId
    },
    getCodeInHospitalId: function (state) {
      return state.codeInHospitalId
    }
  },
  mutations: {
        /** 新增加 */
    setCodeEmpi : function (state, code) {
      state.codeEmpi = code
    },
    setCodeVisitType: function (state, code) {
      state.codeVisitType = code
    },
    setCodePatientId : function (state, code) {
      state.codePatientId = code
    },
    setCodeInHospitalId : function (state, code) {
      state.codeInHospitalId = code
    },
  }
});

export default store
