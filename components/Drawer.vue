<template>
    <div class="fixed md:w-2/12 w-4/12 mt-20">
        <button class="mx-2" @click="switchDrawer()"><UilBars size="30" /></button>
        <div :class="active?'activeDrawer':null" v-if="active"  class="absolute h-screen bg-gray-700 text-gray-500 p-5">

            <div v-for="(route,key) in items" :key="key" class="routes text-gray-300 font-bold  md:m-4 flex justify-start " >
                <router-link class="my-6" :to="route.route">{{route.title}}</router-link>
            </div>

        </div>
    </div>
</template>

<script>
import { UilBars } from '@iconscout/vue-unicons'

export default {
    components:{
        UilBars
    },
    data:()=>({
        active:false,
        items:[
            {
                title:'Anime',
                route:'/'
            },
            {
                title:'Quotes',
                route:'/quotes/randomquotes'
            },
            {
                title:'Studio Ghibli',
                route:'/ghibli/films'
            }
        ]
    }),
    methods:{
        switchDrawer(){
            if(this.active)
                this.active=false;
            
            else this.active=true;
            
        }
    },
    computed:{
      
    }
    
}
</script>
<style>
 
    .activeDrawer{
        @apply w-full
   
    }
  
  
</style>