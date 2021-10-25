<template >
    <div class="grid grid-cols-4 mx-auto px-4 md:w-4/6 ">
            <a :href="anime.url" v-for="(anime,key) in animes" :key="key" class="justify-items-center m-2 align-center flex flex-col">
                <img :src="anime.image_url" class="mx-auto md:w-2/3 2/6 " alt="anime poster">
                <h3 class="mx-auto">{{anime.title}}</h3>
                <p class="text-gray-500 text-sm text-center">Rank {{anime.rank}}</p>
                <div class="flex flex-nowrap mx-auto">
                    <img :src="require('../assets/images/star.png')" width="20px" alt="">
                    <p class="text-sm">{{anime.score}}</p>
                </div>
                <p class="text-xs text-gray-500 font-extralight mx-auto">{{anime.type}} ({{anime.episodes}}) eps</p>
            </a>
    </div>
</template>
<script>
export default {
    props:['animes']
}
</script>