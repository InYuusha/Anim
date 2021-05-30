<template>
<!--Whole Screen -->
<div class="min-h-screen ">
  <!-- Nav bar -->
  <div class="bg-pink-700 p-4  shadow-2xl bg-">
   <input name="#" class="shadow-sm rounded w-24  focus:ring-2 focus:ring-pink-500">
   
  </div>
  <!--Navigation Panel -->
  <div class="bg-white h-10"></div>
<h1 class="text-blue-300">{{quotes}}</h1>
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
