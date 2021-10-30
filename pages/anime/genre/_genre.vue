<template>
    <div>
        <Nav></Nav>
        

        <div class=" w-full flex justify-center my-4 font-bold space-x-4 text-gray-700">
            <button  @click="prevPage()"><UilBackward size="30" /></button>
            <p>{{page}}</p>
            <button id="next"  @click="nextPage()"><UilForward size="30" /></button>
        </div>

              

        <h3 class="text-center text-3xl text-gray-600 my-8">Genre <b>{{$route.params.genre}}</b>, Found {{animesCount}}</h3> 
        
        <Loading :list="animes" />  
        
        <div class="grid md:grid-cols-4 grid-cols-3 mx-auto px-4 md:w-4/6 ">
            <router-link :to="'/anime/'+anime.title+'?id='+anime.mal_id" v-for="(anime,key) in animes" :key="key" class="justify-items-center m-2 align-center flex flex-col space-y-3">
                
                <img :src="anime.image_url" class="mx-auto md:w-2/3  " alt="anime poster">
                <p class="text-xs text-gray-600 font-extralight mx-auto">{{anime.type}} ({{anime.episodes}}) eps</p>
                <h3 class="mx-auto">{{anime.title}}</h3>
                <p class="text-gray-500 text-sm text-center">Rank {{anime.rank}}</p>
                <div class="flex flex-nowrap mx-auto">
                    <img :src="require('../../../assets/images/star.png')" width="20px" alt="">
                    <p class="text-sm">{{anime.score}}</p>
                </div>
                
            </router-link>
        </div>

    </div>
</template>
<script>

import Nav from '../../../components/NavAnime.vue'
import Loading from '../../../components/Loading.vue'
import Animes from '../../../components/Animes.vue'
import { UilForward } from '@iconscout/vue-unicons'
import { UilBackward } from '@iconscout/vue-unicons'
export default {
    components:{
        Nav,
        Loading,
        UilForward,
        UilBackward,
        Animes
    },
    data:()=>({
        page:1
    }),
    computed:{
        animes(){
            return this.$store.state.animesByGenre.anime
        },
        animesCount(){
            return this.$store.state.animesByGenre.item_count
        }
    },
    watch:{
        page:function(page,oldPage){

            let id = this.$route.query.id
            this.$store.dispatch('animesByGenre',{id,page})
        }
    },
    async mounted(){
        let id = this.$route.query.id
        let page = this.page
        await this.$store.dispatch('animesByGenre',{id,page})
        console.log(this.$route)
    },
    methods:{
        nextPage(){
            this.page++;
        },
        prevPage(){
            if(this.page>=2)
                this.page--;
        }
    }
}
</script>
