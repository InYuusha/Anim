<template>
<!--Whole Screen -->
<div class="min-h-screen ">
  <!-- Nav bar -->
  <Nav></Nav>

    <!-- Quotes -->
  <Quote v-for="(quote,key) in quotes" :key="key" :quote="quote"></Quote>

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
    quotes(){
      
      return this.$store.state.quotes
    }

  },
  methods:{

  },
  mounted(){
    this.$store.commit('getQuotes')

  }
}
</script>

<style>


</style>
