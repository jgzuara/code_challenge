<template>
  <div class="container">
    <div class="row">
      <ul class="row">
        <li v-for="film in films" class="col-6 col-md-3 list-unstyled my-1">
          <img
            :src="(film.show.image) ? film.show.image.medium : 'src/images/noimage.png'" 
            :alt="film.show.name"
            :title="film.show.name"
            class="col-12"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import ListFilmsPreview from './ListFilmsPreview.vue'
import { ref, reactive } from 'vue'

export default {
  name: 'ListFilms',
  props: ['films'],
  components: {
    //ListFilmsPreview,
  },
  setup(props) {
    const listFilms = ref(props.films)

    return {
      listFilms
    }
  }
}
</script>