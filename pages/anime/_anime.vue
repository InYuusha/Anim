<template>
    <div>
        <Nav></Nav>
        <Header str="Anime Info" />
        <div class="md:w-3/6 grid grid-cols-2 border-2  border-gray-500 text-sm md:mx-auto mx-4 place-items-start my-10">
            
            <img :src="anime.image_url" alt="anime poster" class="w-4/5 m-4">
            <div class="flex flex-col space-y-4">
                <h3 class="font-extrabold text-lg text-gray-700 my-2">{{anime.title}}</h3>
                <h3 class="font-extrabold text-lg text-gray-700 mb-2">{{anime.title_japanese}}</h3>
                <p><b class="head">Type</b> {{anime.premiered}}</p>
                <p><b class="head">Plot Summary </b> {{anime.synopsis}}</p>
                <span class="flex flex-row space-x-2"><b class="head">Genres </b><p v-for="(genre,key) in anime.genres" :key="key">{{genre.name}},</p></span>
                <p><b class="head">Status </b> {{anime.status}}</p>
                <span class="flex flex-row space-x-2"><b class="head">Other Names </b><p v-for="(name,key) in anime.title_synonyms" :key="key">{{name}}</p></span>
                
                <span class="flex flex-row">
                    <img :src="require('../../assets/images/star.png')" width="20px" alt="">
                    <p class="text-sm">{{anime.score}}</p>
                </span>
                <a v-if="anime.trailer_url" :href="anime.trailer_url"></a>

            </div>
        </div>
    </div>
</template>
<script>

import Nav from '../../components/NavAnime.vue'
import Header from '../../components/Header.vue'
export default {
    components:{
        Nav,
        Header
    },
    computed:{
        anime(){
            return this.$store.state.animeInfo;
        }
    },
    mounted(){
        let id = this.$route.query.id
        this.$store.dispatch('getAnime',{id})
    }
}
</script>
<style >
    .head{
        @apply text-gray-700
    }
</style>