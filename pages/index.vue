<template>
<!--Whole Screen -->
<div class="min-h-screen ">
  <!-- Nav bar -->
 
    <LazyHydrate when-visible>
      <Nav></Nav>
    </LazyHydrate>

    <!--nav2-->
    
  <Header str="Shuffled Quotes" ></Header>

    <!-- Quotes -->

    <Quote v-for="(quote,key) in quotes" :key="key" :quote="quote"></Quote>


 <LazyHydrate when-visible>
    <Loading :list="quotes"></Loading>
 </LazyHydrate>
 

</div>

</template>

<script>

import Nav from "../components/Nav"
import Header from "../components/Header"
import Quote from "../components/Quote"
import Loading from "../components/Loading"

import LazyHydrate from 'vue-lazy-hydration';
export default {
components:{
Nav,
Header,
Quote,
Loading,
LazyHydrate
},
 
  computed:{
    quotes(){
      
      return this.$store.state.quotes
    }

  },
  methods:{

  },
  mounted(){
    this.$store.dispatch('shuffledQuotes')
   

  }
}
</script>

<style>


</style>
