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

    <button @click="getQuotesByAlpha(char)" class=" w-4 mx-1.5 active:bg-gray-700 " v-for="(char,key) in alpha" :key="key">{{char}}</button>

  </div>

  <!--End Nav bar -->
  <div class="px-5 my-2" v-for="(anime,key) in allAnimesByChar" :key="key">
     <button @click="getQuotesByAnime(anime)">{{anime}}</button> 

    </div>
</div>



</div>
</template>

<script>
export default{
    data:()=>({

      alpha:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
      'R','S','T','U','V','W','X','Y','Z']

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


    
