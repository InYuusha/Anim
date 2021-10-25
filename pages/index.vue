<template>
    <div class="">
        <Nav></Nav>
        <Header str="Top Anime"/>

        <div class=" w-full flex justify-center mb-4 font-bold">
            <button @click="prevPage()" class="mx-2">prev</button>
            <p>{{page}}</p>
            <button  @click="nextPage()" class="mx-2">next</button>
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

export default {
    components:{
        Animes,
        Header,
        Loading,
        Nav
        
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

