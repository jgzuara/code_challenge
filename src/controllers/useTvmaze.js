import store from '@/store'

export default function useTvmaze() {
  const listFilms = async params => {
    let rows = []

    await store.dispatch('models/tvmaze/listFilms', params)
      .then(response => {
        rows = response.data
        store.commit('models/tvmaze/setDataRows', rows)
        return true
      })
      .catch(error => {
        return error
      })

    return { rows }
  }

  const getFilm = async params => {
    let film = []

    await store.dispatch('models/tvmaze/getFilm', params)
      .then(response => {
        film = response.data
        return true
      })
      .catch(error => {
        return error
      })

    return { film }
  }

  return {
    listFilms,
    getFilm,
  }
}
