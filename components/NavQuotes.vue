<template>
  
    <!--First Nav -->
    <div class="bg-gray-700 p-4 md:px-10 px-4  shadow-3xl flex justify-between">

      
           <!--Home icon -->
        <router-link to="/" class="pt-1 text-gray-200 w-10 h-10 border-4 border-gray-50  text-center  ">
            A
        </router-link>

      

        
        
        <div class="flex justify-evenly items-center">  

          <router-link to="/quotes/allquotes" class="text-gray-200 font-semibold uppercase text-xs mx-4 md:mx-8" >Anime list</router-link>
          <!-- Search -->
            
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
     getSearch() {
       this.$store.state.quotesBySearch=[]
       this.$store.dispatch("searchedQuotes", {
        search: this.search
      });
      this.$router.push({
        path: `/quotes/search?s=${this.search}`
      });
    },
    
  },
 
};
</script>
