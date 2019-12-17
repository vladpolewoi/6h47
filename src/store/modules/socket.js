const defaultState = () => ({
  connection: 'hello',
})

const state = defaultState()
const getters = {
  getConnection: state => state.connection,
}
const mutations = {

}
const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
