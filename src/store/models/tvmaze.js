import axios from 'axios'

const urlBase = 'https://api.tvmaze.com'

export default {
  namespaced: true,
  state: {
    data: null,
  },
  getters: {
    getData(state) {
      return state.data
    },
  },
  mutations: {
    setDataRows(state, data) {
      state.data = data
    },
  },
  actions: {
    listFilms(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${urlBase}/search/shows?q=${queryParams.searchText}`)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getFilm(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${urlBase}/shows/${queryParams.id}`)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
  },
}
