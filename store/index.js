import Vuex from 'vuex'



const createStore = () => {


    
  return new Vuex.Store({
      
    state: {
      quotes: [], //shuffled quotes
      quotesBySearch: [], //quotes when searched
      animes: [],      //anime list
      animesByChar: [],  //filter anime by char
      quotesByAnime: []   //particular anime quotes
    },

    mutations: {
      /* Get 10 Random Quotes
      params:null
       */
      getQuotes(state) {
         fetch ("https://animechan.vercel.app/api/quotes")
          .then(data => data.json())
          .then(res => state.quotes = res)
      },
      
   

      //GET Quotes by Character
      //Page : Search.vue
       async getQuotesBySearchedChar(state, { search}) {
         await fetch(`https://animechan.vercel.app/api/quotes/character?name=${search}`)
          .then(res => res.json())
           .then(data => {
             if (data) {
                state.quotesBySearch = data; 
             }
             else state.quotesBySearch=[]
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
   

    },
    gettters: {
   
   
    }
  })
}

export default createStore