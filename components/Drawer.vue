<template>
    <div class="fixed w-2/12">
        <button @click="switchDrawer()">Click</button>
        <div :class="active?'activeDrawer':null" v-if="active"  class="absolute h-screen bg-gray-700 text-gray-500 p-5">
            <router-link to="/top">Top</router-link>          
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
                route:'/animes'
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