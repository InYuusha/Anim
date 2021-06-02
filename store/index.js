import Vuex from 'vuex'



const createStore = () => {


    
  return new Vuex.Store({
      
    state: {
      quotes: [],
      quotesBySearch: [],
      animes: [],
      animesByChar: [],
      quotesByAnime: []
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
          .then(data => { console.log(data);state.quotesBySearch = data; })
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
      //GET Anime list
      // Page :- QuotesByAnime.vue
       getQuotesByAnime(state, { anime }) {
        fetch (`https://animechan.vercel.app/api/quotes/anime?title=${anime}`)
          .then(data => data.json())
          .then(res => state.quotesByAnime = res)
         
      }
    
    },
    actions: {
      //Get shuffled Quotes
      async shuffledQuotes(context) {
        await context.commit('getQuotes')
      },

      async animeList(context) {
        await context.commit('getAllAnimes')
        
      },

      //GET quotes by if(anime) , else character
      //Page: Nav
      async searchedQuotes(context, { search}) {
         await fetch(
          `https://animechan.vercel.app/api/quotes/anime?title=${search}`
        )
          .then(res => {
            if (!res.ok) {
              return  context.commit('getQuotesBySearchedChar', {search}) 
            }
            else return res.json()
          })
           .then(data => {
             if (data) {
               context.state.quotesBySearch = data;
             }
           })
        
      },
      async quotesByAnime(context, { anime}) {
        await context.commit('getQuotesByAnime', {anime})
      }
    },
    gettters: {
   
    }
  })
}

export default createStore