<template>
  <div class="container">
    <div class="row">
      <ul class="row">
        <li 
          v-for="film in films" 
          v-bind:key="film.show.id"
          class="col-6 col-md-3 list-unstyled my-1"
        >
          <RouterLink 
            :to="{ name: 'show', params: {id: film.show.id}}"
          >
            <img
              :src="(film.show.image) ? film.show.image.medium : 'src/images/noimage.png'" 
              :alt="film.show.name"
              :title="film.show.name"
              class="col-12"
            >
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ListFilms',
  props: ['films'],
  setup(props) {
    const listFilms = ref(props.films)

    return {
      listFilms
    }
  }
}
</script>