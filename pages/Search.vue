<template>

<div>
  
  <!-- Nav -->
  <Nav></Nav>

  <!-- Seached Quotes -->
  <Quote v-for="(quote,key) in searchedQuotes" :key="key" :quote="quote" ></Quote>


  

</div>

</template>

<script>
import Nav from '../components/Nav'
import Quote from '../components/Quote'

export default {

  components:{
    Quote,
    Nav
    
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
