<template>

<div>
    <Nav></Nav>
 <!-- Window -->
    <div class="w-4/5 md:w-2/3 bg-gray-100 mx-auto
    ">

    <!--Header -->
    <div class="bg-gray-500 p-4">
        <span class="text-gray-100">{{$route.query.anime}}</span>

    </div>
    <!--endHeader -->

    <Quote v-for="(quote,key) in getQuotes" :key="key" :quote="quote">
        
    </Quote>

    </div>

</div>


</template>


<script>
export default{
    data:()=>({
        
        

    }),
    methods:{

    },
    computed:{
        getQuotes(){
            return this.$store.state.quotesByAnime
        }
        

    }
}

</script>