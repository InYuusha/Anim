<template>
<div>

  <!-- Nav -->

<LazyHydrate when-visible>
      <Nav></Nav>
</LazyHydrate>

  <!--nav2-->
    
  <LazyHydrate ssr-only>
    <Header></Header>
  </LazyHydrate>
  
<!-- Main window -->
<div class="w-4/5 md:w-2/3 mx-auto bg-gray-100">
  <!-- Header -->
<LazyHydrate ssr-only>
    <div class=" p-4  bg-gray-500 flex justify-start align-baseline">
    <span class="mx-6 text-gray-100 ">Anime list</span>

  </div>
</LazyHydrate>
  <!--endHeader -->

  <!--Navigation Bar -->
  <div class="bg-gray-200 p-3 mb-8">

    <button :class="currentChar==char?'active':'notActive'"  v-for="(char,key) in alpha" :key="key" @click="getQuotesByAlpha(char)"  >{{char}}</button>

  </div>

  <!--End Nav bar -->

  <!--Anime List-->
  <div class="px-5 my-2" v-for="(anime,key) in allAnimesByChar" :key="key">
     <button @click="getQuotesByAnime(anime)">{{anime}}</button> 

  </div>


  <Loading :list="allAnimesByChar"></Loading>
 
</div>

</div>
</template>

<script>
import Nav from "../components/Nav.vue"
import Header from "../components/Header.vue"
import Loading from "../components/Loading"

import LazyHydrate from 'vue-lazy-hydration';
export default{
  components:{
Nav,
Header,
Loading,
LazyHydrate

  },
    data:()=>({

      alpha:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
      'R','S','T','U','V','W','X','Y','Z'],
      currentChar:''

    }),
    computed:{
      allAnimes(){
        return this.$store.state.animes

      },
      allAnimesByChar(){
        return this.$store.state.animesByChar
      }

    },
    methods:{
      //get Quotes by anime
      //params (anime) name
     async getQuotesByAnime(anime){
        this.$store.state.quotesByAnime=[]
        this.$store.dispatch('quotesByAnime',{anime:anime})
        this.$router.push(`/quotesbyanime?anime=${anime}`)

      },
      //filter Anime list by char
      //params (char) alphabet
      async getQuotesByAlpha(char){
        this.currentChar=char
        this.$store.state.animesByChar=this.allAnimes.filter((anime)=>{
          if(anime.startsWith(char)||anime.startsWith(char.toLowerCase())){
            return anime
          }

        })
      }

    },
}
</script>

<style>

.active{
  @apply w-7 mx-1.5 bg-gray-700 text-lg text-gray-200
    
}
.notActive{
  @apply w-4 mx-1.5  text-sm 
    
}
</style>

    
