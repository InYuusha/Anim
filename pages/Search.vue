<template>

<div>
  
  <!-- Nav -->
  <Nav></Nav>
  <!--nav2-->
  <Header></Header>
  <!-- Seached Quotes -->
  <Quote  v-for="(quote,key) in searchedQuotes" :key="key" :quote="quote" ></Quote>

<Loading :list="searchedQuotes"></Loading>


  

</div>

</template>

<script>
import Nav from "../components/Nav"
import Header from "../components/Header"
import Quote from "../components/Quote"
import LazyHydrate from 'vue-lazy-hydration';
import Loading from '../components/Loading';
export default {
  components:{
    Nav,
    Header,
    Quote,
    LazyHydrate,
    Loading

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
