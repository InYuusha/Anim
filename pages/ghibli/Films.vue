<template>
    <div class="flex justify-center flex-col">
        
        <div class="p-6  bg-gray-700 text-gray-300"><h3 class="mx-14 font-extrabold text-lg ">Studio Ghibli</h3></div>

        <div class="grid md:grid-cols-4 grid-cols-3 mx-auto px-4 md:w-4/6 ">
            <router-link :to="'/ghibli/films/'+film.title+'?id='+film.id" v-for="(film,key) in films" :key="key" class="justify-items-center m-2 align-center flex flex-col space-y-2">
                
                <img :src="film.image" class="mx-auto md:w-2/3 " alt="anime poster">
                
                <h3 class="mx-auto overflow-ellipsis">{{film.title}}</h3>
                <p class="mx-auto text-gray-400 font-light">{{film.release_date}}</p>
                <div class="flex flex-nowrap mx-auto">
                    <img :src="require('../../assets/images/star.png')" width="20px" alt="">
                    <p class="text-sm">{{film.rt_score}} %</p>
                </div>
                
            </router-link>
        </div>
 
    </div>
</template>
<script>

export default {
    data:()=>({

    }),
    computed:{
        films(){
            return this.$store.state.ghibliFilms;
        }

    },
    mounted(){
        this.$store.dispatch('ghibliFilms')
    }
}
</script>