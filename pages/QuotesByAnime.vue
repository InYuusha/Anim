<template>

<div>
   <LazyHydrate when-visible>
        <Nav></Nav>
   </LazyHydrate>

      <!--nav2-->
  <LazyHydrate ssr-only><Header></Header></LazyHydrate>
 <!-- Window -->
    <div class="w-4/5 md:w-2/3 bg-gray-100 mx-auto pb-6">

    <!--Header -->
      <LazyHydrate ssr-only>
            <div class="bg-gray-500 p-4 mb-4">
        <span class="text-gray-100">{{$route.query.anime}}</span>

        </div>
      </LazyHydrate>
    <!--endHeader -->

        <Quote v-for="(quote,key) in getQuotes" :key="key" :quote="quote"></Quote>
        
    <!--Loading-->
        <LazyHydrate when-visible>
            <Loading v-if="load" :list="getQuotes"></Loading>
        </LazyHydrate>

        <!-- Err-->
        <LazyHydrate on-interaction>
            <div v-if="refresh" class="w-4/5 flex flex-col mx-auto md:w-2/3 bg-gray-300 p-4 my-6">
            <span class="mx-auto text-lg text-gray-800">Something went wrong !</span>
            <button @click="fireGetQuotes($route.query.anime)" class="bg-gray-300 text-ms text-gray-700 font-semibold">Retry</button>
        </div>
        </LazyHydrate>


    </div>

</div>


</template>


<script>
import Nav from "../components/Nav"
import Header from "../components/Header"
import Quote from "../components/Quote"
import Loading from "../components/Loading"

import LazyHydrate from 'vue-lazy-hydration';
export default{
    components:{
        Nav,
        Header,
        Quote,
        Loading,
        LazyHydrate

    },
    data:()=>({
        
        refresh:false,
        load:true

    }),
    methods:{
        // ERR if content not loaded
        //in 8000ms
      retry(){

          setTimeout(()=>{
              
              if(this.getQuotes.length==0){
                  this.load=false
                  this.refresh=true
              }
          },8000)
      },
      //Load Again
      fireGetQuotes(anime){
          this.refresh=false
          this.load=true
          this.$store.dispatch('quotesByAnime',{anime})
      }

    },
    computed:{
        getQuotes(){
            return this.$store.state.quotesByAnime
        }
    },
    mounted(){
        this.retry()
    
    }
    
}

</script>