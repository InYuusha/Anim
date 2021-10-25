<template>
    <div>
        <Nav></Nav>
        

        <div class=" w-full flex justify-center my-4 font-bold space-x-4 text-gray-700">
            <button  @click="prevPage()"><UilBackward size="30" /></button>
            <p>{{page}}</p>
            <button id="next"  @click="nextPage()"><UilForward size="30" /></button>
        </div>

        
        <h3 class="text-center text-3xl text-gray-600 my-8">Genre <b>{{$route.params.genre}}</b>, Found {{animesCount}}</h3> 
        

        <Animes :animes="animes" />

    </div>
</template>
<script>

import Nav from '../../../components/NavAnime.vue'
import Animes from '../../../components/Animes.vue'
import { UilForward } from '@iconscout/vue-unicons'
import { UilBackward } from '@iconscout/vue-unicons'
export default {
    components:{
        Nav,
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
