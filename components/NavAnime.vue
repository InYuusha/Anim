<template>
  
    <!--First Nav -->
    <div class="bg-gray-700 p-4 md:px-10 px-4 text-gray-200 shadow-3xl flex justify-between">

        <div class="flex space-x-4">
            <router-link class="my-auto" to="/">Top</router-link>
            <router-link class="my-auto" to="/anime/genre">Genre</router-link>
        </div>
       
        <div class="flex justify-evenly items-center">  

            <input
               src=""
               v-on:keyup.enter="getSearch()"
               v-model="search"
               class="md:h-11 h-8 shadow-sm rounded md:w-36 w-14 px-2 text-gray-700"
                />
            <button
                v-on:click="getSearch()"
              class=" md:w-16 w-12 md:h-11 h-9 rounded-md text-white md:text-sm text-xs bg-gray-900"
              >
             Search
        </button>
           
          <!-- endSearch -->
          
        </div>
   
    </div>
  
    <!-- End of nav -->
  
</template>

<script>

export default {
  components:{
    

  },
  data: () => ({
    search: ""
  }),
  methods: {
     async getSearch() {
       
       await this.$store.dispatch("animesBySearch", {
        q: this.search
      });
      this.$router.push({
        path: `/anime/search?q=${this.search}`
      });
    },
    
  },
 
};
</script>
