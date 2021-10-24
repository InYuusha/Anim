<template>
    <div class="">
        <Header str="Top Anime"/>

        <div class=" w-full flex justify-center mb-4 font-bold">
            <button @click="prevPage()" class="mx-2">prev</button>
            <p>{{page}}</p>
            <button  @click="nextPage()" class="mx-2">next</button>
        </div>

    <!--No content -->
        <div class=" flex flex-col my-9" v-if="typeof animes=='undefined'||animes.length==0">
            <h3 class="text-7xl font-extrabold mx-auto">404</h3>
            <h3 class="text-gray-600 align-bottom mx-auto">No Content on this page</h3>
        </div>

    <!-- Content -->
        <div class="grid grid-cols-4 mx-auto px-4 md:w-4/6 ">
            <a :href="anime.url" v-for="(anime,key) in animes" :key="key" class="justify-items-center m-2 align-center flex flex-col">
                <img :src="anime.image_url" class="mx-auto md:w-2/3 2/6 " alt="anime poster">
                <h3 class="mx-auto">{{anime.title}}</h3>
                <p class="text-gray-500 text-sm text-center">Rank {{anime.rank}}</p>
                <div class="flex flex-nowrap mx-auto">
                    <img :src="require('../assets/images/star.png')" width="20px" alt="">
                    <p class="text-sm">{{anime.score}}</p>
                </div>
                <p class="text-xs text-gray-500 font-extralight mx-auto">{{anime.type}} ({{anime.episodes}}) eps</p>
            </a>
        </div>
 
    </div>
</template>
<script>

import Header from '../components/Header.vue'
export default {
    components:{
        Header,
        
    },
    data:()=>({
        page:1
    }),
    mounted(){
        let page=this.page
        this.$store.dispatch('topAnime',{page})
    },
    methods:{
        nextPage(){
            this.page++;
        },
        prevPage(){
            if(this.page>=2)
                this.page--;
        }
    },
    watch:{
        page:function(page,oldPage){
            this.$store.dispatch('topAnime',{page})
        }
    },
    

    computed:{
        animes(){
            return this.$store.state.topAnime;
        }
    }
}
</script>

