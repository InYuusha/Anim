<template>
    <div class="">
        <Nav></Nav>
        <Header str="Top Anime"/>

        <div class=" w-full flex justify-center my-4 font-bold space-x-4 text-gray-700">
            <button  @click="prevPage()"><UilBackward size="30" /></button>
            <p>{{page}}</p>
            <button id="next"  @click="nextPage()"><UilForward size="30" /></button>
        </div>

    <Loading :list="animes" />

    <!-- Content -->
       <Animes :animes="animes" />
 
    </div>
</template>
<script>
import Animes from "../components/Animes.vue"
import Nav from '../components/NavAnime.vue'
import Loading from '../components/Loading.vue'
import Header from '../components/Header.vue'

import { UilForward } from '@iconscout/vue-unicons'
import { UilBackward } from '@iconscout/vue-unicons'
export default {
    components:{
        Animes,
        Header,
        Loading,
        Nav,
        UilForward,
        UilBackward,
        
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

