<template>
    <div>
        <Nav />
        <Header :str="'Search results for '+$route.query.q" />
        <div class="w-full text-center my-6">
            <h3 class="text-3xl text-gray-600">Nothing found ;(</h3>
            <p>Try again with different search key</p>
        </div>
        <Animes :animes="animes" />
        
    </div>
</template>
<script>
import Nav from '../../components/NavAnime.vue'
import Animes from '../../components/Animes.vue'
import Header from '../../components/Header.vue'
export default {
    components:{
        Nav,
        Animes,
        Header
    },
    computed:{
        animes(){
            return this.$store.state.animesBySearch;
        }
    }
}
</script>