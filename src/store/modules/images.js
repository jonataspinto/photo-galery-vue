import { fetchImageList } from '../../services'

const state = () => ({
  images: [],
  loading: false,
}); 

const getters = {};

const actions = {
  async fetchImages ({ commit }) {
    commit('setLoading', true)
    const response = await fetchImageList(); 
    commit('setStateImages', response);
    setTimeout(() => {
      commit('setLoading', false)
    }, 3000);
  }
}; 

const mutations = {
  setStateImages: (state, payload) => state.images = payload,
  setLoading: (state, payload) => state.loading = payload
} 

export default {
  state,
  getters,
  actions,
  mutations
}