<template >
    <div class="grid md:grid-cols-4 grid-cols-3 mx-auto px-4 md:w-4/6 ">
            <router-link :to="'/anime/'+anime.title+'?id='+anime.mal_id" v-for="(anime,key) in animes" :key="key" class="justify-items-center m-2 align-center flex flex-col space-y-2">
                
                <img :src="anime.image_url" class="mx-auto md:w-2/3 " alt="anime poster">
                <p class="text-xs text-gray-600 font-extralight mx-auto">{{anime.type}} ({{anime.episodes}}) eps</p>
                <h3 class="mx-auto overflow-ellipsis">{{anime.title}}</h3>
                <p class="text-gray-500 text-sm text-center">Rank {{anime.rank}}</p>
                <div class="flex flex-nowrap mx-auto">
                    <img :src="require('../assets/images/star.png')" width="20px" alt="">
                    <p class="text-sm">{{anime.score}}</p>
                </div>
                
            </router-link>
    </div>
</template>
<script>
export default {
    props:['animes']
}
</script>