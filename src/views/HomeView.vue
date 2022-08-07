<template>
  <!--<main>-->
    <div class="row">
      <div class="col-12 tex-center">
        <!--
        <RouterLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
          </svg>      
        </RouterLink>
        -->
        <search-text
          :parameters="params"
          @makeSearch="makeSearch"
        />
        <list-films
          :films="filmsData"
        />
      </div>      
    </div>   
  <!--</main>-->
</template>

<script>
  import useTvmaze from '@/controllers/useTvmaze'
  import SearchText from '@/components/SearchText.vue'
  import ListFilms from '@/components/ListFilms.vue'
  import { reactive, watch, ref } from 'vue'

  export default {
    name: 'HomeView',
    components: {
      SearchText,
      ListFilms
    },
    setup(props, { emit }){
      const { listFilms } = useTvmaze()
      const filmsData = ref(null)
      const response = ref(null)

      const params = reactive({
        // id: null,
        searchText: null,
        page: 0
      })

      // Watch
      /*
      watch(params, (val, prevVal) => {
        listFilms(params)
      })
      */
      const makeSearch = async () => {

        if (params.searchText != localStorage.getItem("lastSearch")) {
          response.value = await listFilms(params)
          filmsData.value = response.value.rows

          localStorage.setItem("lastSearch", params.searchText)
          localStorage.setItem("lastFilms", JSON.stringify(filmsData.value))          
        } else {
          filmsData.value = JSON.parse(localStorage.getItem("lastFilms"))
        }



        //console.log('EL MAKE SEARCH')
        //console.log(filmsData.value)
      }

      return {
        params,
        makeSearch,
        filmsData
      }

    }
  }
</script>
