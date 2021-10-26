<template>
    <div>
        <Nav></Nav>
        <Header str="Genre"></Header>

       <div class="md:w-8/12 w-10/12 text-xs mx-auto grid md:grid-cols-6 grid-cols-3 gap-4">
          <router-link :to="'/anime/genre/'+genre.genre+'?id='+genre.id" class="mx-4 my-3 w-full p-4 text-gray-100 bg-gray-500 rounded-lg hover:bg-gray-800 hover:text-gray-200 " v-for="(genre,key) in genres" :key="key">
             <p class="text-center">{{genre.genre}}</p>
          </router-link>
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
    data:()=>({
        genres:[
            {genre:'Action',id:1},
            {genre:'Adventure',id:2},
            {genre:'Cars',id:3},
            {genre:'Comedy',id:4},
            {genre:'Avante Garde',id:5},
            {genre:'Demons',id:6},
            {genre:'Mystery',id:7},
            {genre:'Drama',id:8},
            {genre:'Ecchi',id:9},
            {genre:'Fantasy',id:10},
            {genre:'Game',id:11},
            {genre:'Hentai',id:12},
            {genre:'Historical',id:13},
            {genre:'Horror',id:14},
            {genre:'Kids',id:15},
            {genre:'Martial Arts',id:17},
            {genre:'Mecha',id:18},
            {genre:'Music',id:19},
            {genre:'Parody',id:20},
            {genre:'Samurai',id:21},
            {genre:'Romance',id:22},
            {genre:'School',id:23},
            {genre:'Sci Fi',id:24},
            {genre:'Shoujo',id:25},
            {genre:'Girls Love',id:26},
            {genre:'Shounen',id:27},
            {genre:'Boys Love',id:28},
            {genre:'Space',id:29},
            {genre:'Sports',id:30},
            {genre:'Super Power',id:31},
            {genre:'Vampire',id:32},
            {genre:'Harem',id:35},
            {genre:'Slice Of Life',id:36},
            {genre:'Supernatural',id:37},
            {genre:'Military',id:38},
            {genre:'Police',id:39},
            {genre:'Psychological',id:40},
            {genre:'Suspense',id:41},
            {genre:'Seinen',id:42},
            {genre:'Josei',id:43},
            {genre:'Award Winning',id:46},
            {genre:'Gourmet',id:47},
            {genre:'Work Life',id:48},
            {genre:'Erotica',id:49},
            
        ]
    })
}
</script>