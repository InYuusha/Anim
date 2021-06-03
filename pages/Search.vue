<template>

<div>
  
  <!-- Nav -->
<LazyHydrate when-visible>
    <Nav></Nav>
</LazyHydrate>

  <!--nav2-->
  <LazyHydrate when-visible>
    <Header :str="$route.query.s.toUpperCase()"></Header>
  </LazyHydrate>

  <!-- Seached Quotes -->
  <Quote  v-for="(quote,key) in searchedQuotes" :key="key" :quote="quote" ></Quote>

<LazyHydrate when-visible>
  <Loading :list="searchedQuotes"></Loading>
</LazyHydrate>


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
 
}
</script>

