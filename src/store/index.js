import Vue from 'vue'
import Vuex from 'vuex'
import imagesModule from './modules/images';

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    showModal: false,
    modalContent: null
  },
  actions: {
    handleShowModal: (context, payload) => {
      context.commit('setShowModal', payload)
    },
  },
  mutations: {
    setShowModal: (state, payload) => {
      switch (payload) {
        case 'close':
          state.showModal = false
          return; 
        default: 
          state.showModal = true
          state.modalContent = payload
          return ;
      }
    },
  },
  modules: {
    imagesModule,
  }
})
