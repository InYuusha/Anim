<template>
  <div class="mb-6">
    <!--First Nav -->
    <div class="bg-gray-700 p-4 px-10  shadow-3xl flex justify-between">

     
        <!--Home icon -->
          <router-link to="/" class="pt-1 w-10 h-10 border-4 border-gray-50  text-center text-gray-100 ">
            A
        </router-link>
   
        
  
        <div class="flex justify-evenly items-center">
          <router-link class="text-gray-200 font-semibold uppercase text-xs mx-8" to="/animes">Animes list</router-link>
          <!-- Search -->
            <div>
                <input
               src=""
               v-on:keyup.enter="getSearch()"
               v-model="search"
               value="Search By Anime or Character"
               name="#"
               class="md:h-11 h-8 shadow-sm rounded md:w-36 w-16 px-2  focus:ring-2 focus:ring-pink-500 text-grey-700"
                />
             <button
                v-on:click="getSearch()"
              class=" md:w-16 w-12 md:h-11 h-9 rounded-md text-white md:text-sm text-xs bg-gray-900"
              >
             Search
            </button>
           </div>
          <!-- endSearch -->
          
        </div>
   
    </div>
    <!--Navigation Panel -->
    <div class="bg-gray-100 h-10 flex justify-center align-middle"></div>

    <!-- End of nav -->
  </div>
</template>

<script>
export default {
  data: () => ({
    search: ""
  }),
  methods: {
    getSearch() {
      this.$store.commit("getSearchQuotes", {
        search: this.search
      });
      this.$router.push({
        path: `/search?s=${this.search}&page=${this.getPage}`
      });
    },
    
  },
  computed: {
    getPage() {
      return this.$store.state.page;
    }
  }
};
</script>
