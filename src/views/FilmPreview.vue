<template>
<div class="container">
  <div class="col-12" v-if="filmData">
    <h2 class="text-center">{{filmData.film.name}}</h2>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-3">
        <img
          :src="(filmData.film.image) ? filmData.film.image.medium : 'src/images/noimage.png'" 
          :alt="filmData.film.name"
          :title="filmData.film.name"
          class="col-12 px-2"
        >
      </div>
      <div class="col-12 col-sm-6 col-md-9">
        <p>
          <b>Language:</b> {{ filmData.film.language }}
        </p>
        <p>
          <b>Genres:</b> {{ filmData.film.genres }}
        </p>
        <p>
          <b>Summary:</b>
          <span v-html="filmData.film.summary"></span>
        </p>
        <div class="col-12 text-center">
          <button 
            type="button" 
            class="btn btn-primary"
            @click="watchFilm"
          >
            Watch online
          </button>
        </div>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
import { useRoute } from 'vue-router'
import useTvmaze from '@/controllers/useTvmaze'
import { onBeforeMount } from 'vue'
import { reactive, ref } from 'vue'

export default {
  name: 'FilmPreview',
  setup() {
    const route = useRoute()
    const { getFilm } = useTvmaze()
    const filmData = ref(null)

    const params = reactive({
      id: route.params.id
    })

    onBeforeMount(() => {
      makeSearch()
    })

    const makeSearch = async () => {
      if (params.id != localStorage.getItem("lastFilmId")) {
        filmData.value = await getFilm(params)
        localStorage.setItem("lastFilmId", params.id)
        localStorage.setItem("lastFilm", JSON.stringify(filmData.value)) 
      } else {
        filmData.value = JSON.parse(localStorage.getItem("lastFilm"))
      }
    }

    const watchFilm = async () => {
      alert('This is only a test. We don\'t allow piracy!')
    }

    return {
      filmData,
      watchFilm
    }
  }
}
</script>