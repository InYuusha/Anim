<template>
    <div class="flex justify-center flex-col">

        <div class="p-6  bg-gray-700 text-gray-300"><h3 class="mx-14 font-extrabold text-lg ">Studio Ghibli</h3></div>
        
        <div v-if="Object.keys(film).length==0" class="mx-auto w-2/3 p-4 flex mb-4 justify-center">
            <span class="text-lg font-semibold text-gray-700">Just a moment...</span>
        </div>
        <p>{{film.title}}</p>

        <div v-if="Object.keys(film).length!=0" class="md:w-3/6 border-2 overflow-auto border-gray-500 text-sm md:mx-auto mx-4 place-items-start my-10 ">
            
            <img :src="film.image" alt="anime poster" class="w-1/3 m-4 float-left">
            <div class="flex flex-col space-y-4 md:text-sm text-xs">
                <h3 class="font-extrabold md:text-lg text-sm text-gray-700 my-2">{{film.title}}</h3>
                <h3 class="font-extrabold md:text-lg text-sm text-gray-700 mb-2">{{film.original_title}}</h3>
                <p><b class="head">Released </b> {{film.release_date}}</p>
                <p><b class="head">Director </b> {{film.director}}</p>
                <p><b class="head">Plot Summary </b> {{film.description}}</p>
                <span class="flex flex-row space-x-2"><b class="head">Genres </b><p v-for="(genre,key) in anime.genres" :key="key">{{genre.name}},</p></span>
               
                
                
                <span class="flex flex-row">
                    <img :src="require('../../../assets/images/star.png')" width="20px" alt="">
                    <p class="text-sm">{{anime.score}}</p>
                </span>
            
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        film(){
            return this.$store.state.film
        },
        mounted(){
            let id =this.$route.query.id;
            this.$store.dispatch('ghibliFilm',{id})
        }
    }
}
</script>