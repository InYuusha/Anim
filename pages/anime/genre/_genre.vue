<template>
    <div>
        <Nav></Nav>
        

        <div class=" w-full flex justify-center mb-4 font-bold">
            <button @click="prevPage()" class="mx-2">prev</button>
            <p>{{page}}</p>
            <button  @click="nextPage()" class="mx-2">next</button>
        </div>

        
        <h3 class="text-center text-3xl text-gray-600 my-8">Genre <b>{{$route.params.genre}}</b>, Found {{animesCount}}</h3> 
        

        <Animes :animes="animes" />

    </div>
</template>
<script>

import Nav from '../../../components/NavAnime.vue'
import Animes from '../../../components/Animes.vue'

export default {
    components:{
        Nav,
    
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