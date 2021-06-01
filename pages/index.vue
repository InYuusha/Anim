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


export default {

 
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
