<template>
<div>
    <div class="bg-pink-700 p-4  shadow-2xl bg-">
    <input v-on:keyup.enter="getSearch()" v-model="search" name="#" class="shadow-sm rounded w-24 px-2  focus:ring-2 focus:ring-pink-500">
    <button  v-on:click="getSearch()">Search</button>
   
  </div>
  <!--Navigation Panel -->
  <div class="bg-white h-10">

  </div>
</div>

</template>

<script>
export default{

    data:()=>({
        search:"",
    }),
    methods:{
        getSearch(){
         this.$store.commit('getSearchQuotes',{
             search:this.search
         })
         this.$router.push('/search')
        }
    },
  
}

</script>