<template>
    <div class="fixed md:w-2/12 w-4/12 ">
        <button class="mx-2" @click="switchDrawer()">Click</button>
        <div :class="active?'activeDrawer':null" v-if="active"  class="absolute h-screen bg-gray-700 text-gray-500 p-5">

            <div class="routes text-gray-300 font-bold  md:m-4 flex justify-start " v-for="(route,key) in items" :key="key">
                <router-link :to="route.route">{{route.title}}</router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        active:true,
        items:[
            {
                title:'Anime',
                route:'/'
            },
            {
                title:'Quotes',
                route:'/randomquotes'
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