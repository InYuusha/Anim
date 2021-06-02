<template>

<div>
  
  <!-- Nav -->
  <Nav></Nav>
  <!--nav2-->
  <Header></Header>
  <!-- Seached Quotes -->
  <Quote  v-for="(quote,key) in searchedQuotes" :key="key" :quote="quote" ></Quote>

 <LazyHydrate>
    <div v-if="searchedQuotes.length==0||typeof searchedQuotes=='undefined'" class="md:w-2/3 w-4/5 bg-gray-200 mx-auto p-8 flex flex-col">
    <span class="text-2xl text-gray-800 mb-7">We couldn't find anything with "{{$route.query.s}}"</span>
    <span class="text-gray-600">You can try with character name or anime name, or checkout the Anime list</span>
  
  </div>
 </LazyHydrate>
  

</div>

</template>

<script>
import Nav from "../components/Nav"
import Header from "../components/Header"
import Quote from "../components/Quote"
import LazyHydrate from 'vue-lazy-hydration';
export default {
  components:{
    Nav,
    Header,
    Quote,
    LazyHydrate

  },


  computed:{
    searchedQuotes(){
      return this.$store.state.quotesBySearch
    }
 

  },
  methods:{

  },

}
</script>

<style>


</style>
