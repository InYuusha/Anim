<template>

<div>
   <LazyHydrate when-visible>
        <Nav></Nav>
   </LazyHydrate>

      <!--nav2-->
  <Header></Header>
 <!-- Window -->
    <div class="w-4/5 md:w-2/3 bg-gray-100 mx-auto">

    <!--Header -->
        <div class="bg-gray-500 p-4 mb-4">
        <span class="text-gray-100">{{$route.query.anime}}</span>

        </div>
    <!--endHeader -->

        <Quote v-for="(quote,key) in getQuotes" :key="key" :quote="quote"></Quote>

    <!--Loading-->
        <LazyHydrate when-visible>
            <Loading :list="getQuotes"></Loading>
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
        
        

    }),
    methods:{

    },
    computed:{
        getQuotes(){
            return this.$store.state.quotesByAnime
        }
    
    },
    
}

</script>