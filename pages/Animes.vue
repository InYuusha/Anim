<template>
<div>

  <!-- Nav -->
  <Nav></Nav>
<!-- Main window -->
<div class="w-4/5 md:w-2/3 mx-auto bg-gray-100">
  <!-- Header -->
  <div class=" p-4  bg-gray-500 flex justify-start align-baseline">
    <span class="mx-6 text-gray-100 ">Anime list</span>

  </div>
  <!--endHeader -->

  <!--Navigation Bar -->
  <div class="bg-gray-200 p-3">

    <button :class="currentChar==char?'active':'notActive'"  v-for="(char,key) in alpha" :key="key" @click="getQuotesByAlpha(char)"  >{{char}}</button>

  </div>

  <!--End Nav bar -->
  <div class="px-5 my-2" v-for="(anime,key) in allAnimesByChar" :key="key">
     <button @click="getQuotesByAnime(anime)">{{anime}}</button> 

    </div>

    <div v-if="allAnimesByChar.length==0" class="md:w-2/3 w-4/5 bg-gray-200 mx-auto p-8 flex flex-col">
    <span class="text-2xl text-gray-800 mb-7">We couldn't proceed your request at this moment "{{$route.query.s}}"</span>
    <span class="text-gray-600">You can try again later after some try</span>
  

  </div>
</div>



</div>
</template>

<script>
export default{
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
      async getQuotesByAnime(anime){
        await this.$store.commit('getQuotesByAnime',{anime:anime})
        this.$router.push(`/quotesbyanime?anime=${anime}`)

      },
      async getQuotesByAlpha(char){
        this.currentChar=char
        this.$store.state.animesByChar=this.allAnimes.filter((anime)=>{
          if(anime.startsWith(char)||anime.startsWith(char.toLowerCase())){
            return anime
          }


        })
      }

    },
    mounted(){
        this.$store.commit('getAllAnimes')
    }
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

    
