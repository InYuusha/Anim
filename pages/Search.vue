<template>

<div>
  
  <!-- Nav -->
  <Nav></Nav>

  <!-- Seached Quotes -->
  <Quote v-for="(quote,key) in searchedQuotes" :key="key" :quote="quote" ></Quote>


  

</div>

</template>

<script>


export default {


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
