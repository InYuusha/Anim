<template>
    <div>
        <Nav />
        <Header :str="'Search results for '+$route.query.q" />
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