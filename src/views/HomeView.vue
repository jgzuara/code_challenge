<template>
  <div class="row">
    <div class="col-12 tex-center">
      <search-text
        :parameters="params"
        @makeSearch="makeSearch"
      />
      <list-films
        :films="filmsData"
      />
    </div>
  </div>
</template>

<script>
  import useTvmaze from '@/controllers/useTvmaze'
  import SearchText from '@/components/SearchText.vue'
  import ListFilms from '@/components/ListFilms.vue'
  import { reactive, ref } from 'vue'

  export default {
    name: 'HomeView',
    components: {
      SearchText,
      ListFilms
    },
    setup(){
      const { listFilms } = useTvmaze()
      const filmsData = ref(null)
      const response = ref(null)

      const params = reactive({
        searchText: null,
        page: 0
      })

      const makeSearch = async () => {
        if (params.searchText != localStorage.getItem("lastSearch")) {
          response.value = await listFilms(params)
          filmsData.value = response.value.rows

          localStorage.setItem("lastSearch", params.searchText)
          localStorage.setItem("lastFilms", JSON.stringify(filmsData.value))          
        } else {
          filmsData.value = JSON.parse(localStorage.getItem("lastFilms"))
        }
      }

      return {
        params,
        makeSearch,
        filmsData
      }

    }
  }
</script>
