<template>
<!--Whole Screen -->
<div class="min-h-screen ">
  <!-- Nav bar -->
 
  <Nav/>
   
    <!--nav2-->
    
  <LazyHydrate ssr-only><Header str="Shuffled Quotes" ></Header></LazyHydrate>

    <!-- Quotes -->

      <Quote v-for="(quote,key) in quotes" :key="key" :quote="quote"></Quote>
    

    <LazyHydrate when-visible>
      <Loading :list="quotes"></Loading>
    </LazyHydrate>

 

</div>

</template>

<script>


import Header from "../../components/Header"
import Quote from "../../components/Quote"
import Loading from "../../components/Loading"
import Drawer from '../../components/Drawer.vue'
import Nav from "../../components/NavQuotes.vue"
import LazyHydrate from 'vue-lazy-hydration';
export default {
components:{
Nav,
Header,
Quote,
Loading,
LazyHydrate,
Drawer
},
 
  computed:{
    quotes(){
      return this.$store.state.quotes
    }

  },
  // get quotes
  //get anime list
  async mounted(){
    await this.$store.dispatch('shuffledQuotes')
     this.$store.dispatch('animeList')
   
  }
}
</script>

