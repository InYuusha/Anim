<template>
<div class="pb-6">

    <div class="bg-gray-700 p-4  shadow-3xl bg-">
    <input src="" v-on:keyup.enter="getSearch()" v-model="search" value="Search By Anime or Character" name="#" class=" h-11 shadow-sm rounded w-36 px-2  focus:ring-2 focus:ring-pink-500 text-grey-700">
    <button  v-on:click="getSearch()" class=" w-16 h-11 rounded-md text-white text-sm   bg-gray-900">Search</button>
   
  </div>
  <!--Navigation Panel -->
  <div class="bg-gray-100 h-10 flex justify-center align-middle">
      <div class="flex align-middle ">
         <a> <p class="mx-2 text-gray-600 text-sm">Prev</p><fa :icon="['far','lightbulb']" />  </a>
         <a> <p class="mx-2 text-gray-600 text-sm">Next</p><fa :icon="['fas', 'chevronRight']" /></a>
      </div>

  </div>

  <!-- End of nav -->
</div>

</template>

<script>
export default{

    data:()=>({
        search:"",
    }),
    methods:{
        getSearch(){
         this.$store.commit('getSearchQuotes',{
             search:this.search
         })
         this.$router.push('/search')
        }
    },
  
}

</script>