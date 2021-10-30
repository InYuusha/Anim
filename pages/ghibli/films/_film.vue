<template>
    <div>
        <div class="p-6  bg-gray-700 text-gray-300"><h3 class="mx-14 font-extrabold text-lg ">Studio Ghibli</h3></div>

          <div v-if="Object.keys(film).length!=0" class="md:w-3/6 border-2 overflow-auto border-gray-500 text-sm md:mx-auto mx-4 place-items-start my-10 ">
            
            <img :src="film.image" alt="film poster" class="w-1/3 m-4 float-left">
            <div class="flex flex-col space-y-4 md:text-sm text-xs">
                <h3 class="font-extrabold md:text-lg text-sm text-gray-700 my-2">{{film.title}}</h3>
                <h3 class="font-extrabold md:text-lg text-sm text-gray-700 mb-2">{{film.original_title}}</h3>
                <p><b class="head">Type</b> {{film.release_date}}</p>
                <p><b class="head">Plot Summary </b> {{film.description}}</p>
                    
                
                <span class="flex flex-row">
                    <img :src="require('../../../assets/images/star.png')" width="20px" alt="">
                    <p class="text-sm">{{film.rt_score}}</p>
                </span>
                <p class="text-gray-400"><b>Director </b>{{film.director}}</p>
                <p class="text-gray-400"><b>Producer </b>{{film.producer}}</p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{

    },
    data:()=>({

        film:{}
    }),
    computed:{
        
    },
    mounted(){
        
      let id = this.$route.query.id
      fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then(data=>data.json())
        .then(film=>this.film=film)
      
    }
}
</script>