import Vuex from 'vuex'



const createStore = () => {


    
  return new Vuex.Store({
      
    state: {
      quotes: [], //shuffled quotes
      quotesBySearch: [], //quotes when searched
      animes: [],      //anime list
      animesByChar: [],  //filter anime by char
      quotesByAnime: [],   //particular anime quotes

      topAnime:[],
      
      animesByGenre:{},
      animeInfo:{},
      
      animesBySearch:[],

      ghibliFilms:[],
      
      
    },

    mutations: {
      /* Get 10 Random Quotes
      params:null
       */
      getQuotes(state) {
         fetch ("https://animechan.vercel.app/api/quotes")
           .then(data => {
             //if couldnt fetch
             if (!data.ok) {
               state.quotes = [{quote:"Something Went Wrong ! Try Again later"}]
             }
             else return data.json()
           })
           .then(res => {
             if (res) {
               state.quotes = res;
             }
           })
      },
      
   

      //GET Quotes by Character
      //Page : Search.vue
       getQuotesBySearchedChar(state, { search}) {
         fetch(`https://animechan.vercel.app/api/quotes/character?name=${search}`)
           .then(res => {
             //if not found
             if (!res.ok) {
               state.quotesBySearch = [{quote:`We Couldnt find anything with ${search}`}]
             }
             else return res.json()
           })
           .then(data => {
             if (data) {
               state.quotesBySearch=data
             }
           })
      },

      // GET  Anime list  
      // Page:- Animes.vue
       getAllAnimes(state) {
        fetch(`https://animechan.vercel.app/api/available/anime`)
          .then(data => data.json())
          .then(res => state.animes = state.animesByChar = res)
          .catch(err => {
            console.log(err)
          })   
          
      },
        
      //GET Quotes by anime
      // Page :- QuotesByAnime.vue
       getQuotesByAnime(state, { anime }) {
        fetch (`https://animechan.vercel.app/api/quotes/anime?title=${anime}`)
          .then(data => data.json())
          .then(res => state.quotesByAnime = res)
      },
      
    getTopAnime(state,{page}){
      //let p= typeof page=='undefined'?1:page
      state.topAnime=[]

      fetch(`https://api.jikan.moe/v3/top/anime/${page}`)
      .then(data=>data.json())
      .then(list=>state.topAnime = list.top)
    },
    getAnimesByGenre(state,{id,page}){
      
      fetch(`https://api.jikan.moe/v3/genre/anime/${id}/${page}`)
      
        .then(data=>data.json())
        .then(list=>state.animesByGenre=list)
    },
    getAnimeById(state,{id}){
      state.animeInfo={}
      
      fetch(`https://api.jikan.moe/v3/anime/${id}`)
        .then(data=>data.json())
        .then(info=>state.animeInfo=info)
    },

    getAnimeBySearch(state,{q}){

      state.animesBySearch =[]
      fetch(`https://api.jikan.moe/v3/search/anime?q=${q}`)
      .then(data=>data.json())
      .then(list=>state.animesBySearch=list.results)
    },
    getGhibliFilms(state){
      state.ghibliFilms=[]
      fetch(`https://ghibliapi.herokuapp.com/films`)
        .then(data=>data.json())
        .then(list=>state.ghibliFilms=list)
    },
  
    
    },
    actions: {
      //FIRE shuffled Quotes
       shuffledQuotes(context) {
         context.commit('getQuotes')
      },
     
          //FIRE Anime list
       animeList(context) {
         context.commit('getAllAnimes') 
      },
      
      //FIRE quotes by if(anime) , else character
      //Page: Nav
      async searchedQuotes(context, { search}) {
         await fetch(
          `https://animechan.vercel.app/api/quotes/anime?title=${search}`
        )
           .then(res => {
             
            //if not found
             if (!res.ok) {
              //try by character name
              return  context.commit('getQuotesBySearchedChar', {search}) 
             }
             //IF ok
            else return res.json()
          })
           .then(data => {
             if (data) {
               context.state.quotesBySearch = data;
             }
           })
        
      },
      //FIRE quotes BY anime
      quotesByAnime(context, { anime}) {
        context.commit('getQuotesByAnime', {anime})
      },
      
      topAnime(context,{page}){
        context.commit('getTopAnime',{page})
      },
      animesByGenre(context,{id,page}){
        
        context.commit('getAnimesByGenre',{id,page})   
      },
      getAnime(context,{id}){
        context.commit('getAnimeById',{id})
      },
      async animesBySearch(context,{q}){
        await context.commit('getAnimeBySearch',{q})
      },
      ghibliFilms(context){
        context.commit('getGhibliFilms')
      },
    

    },
    gettters: {
   
   
    }
  })
}

export default createStore