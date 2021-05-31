import Vuex from 'vuex'



const createStore = () => {


    
    return new Vuex.Store({
      
    state: {
      quotes:[],
        quotesBySearch: [],
        quotesBySearchNext:[],
      page:1
    },
      mutations: {
        /* Get 10 Random Quotes
        params:null
         */
          async getQuotes(state) {
             await this.$axios
                .get("https://animechan.vercel.app/api/quotes")
                .then(data => {
                    
                      state.quotes = data.data;
                  
                });
        },
        async getSearchQuotes(state, { search }) {
          /*Case 1 Get Quotes By Anime */
          await this.$axios.get(`https://animechan.vercel.app/api/quotes/anime?title=${search}&?page=${state.page}`)
            .then(data => {
             console.log(data.data)
              state.quotesBySearch = data.data
               this.$axios.get(`https://animechan.vercel.app/api/quotes/anime?title=${search}&?page=${state.page + 1}`)
                .then(data => {
                state.quotesBySearchNext=data.data
              })
            
            })
            .catch(err => {
              if (err) {
                /* Case 2 Get Quotes By character*/
              this.$axios.get(
                `https://animechan.vercel.app/api/quotes/character?name=${search}&?page=${state.page}`
              ).then(data => {
                state.quotesBySearch = data.data
                   this.$axios.get(`https://animechan.vercel.app/api/quotes/character?name=${search}&?page=${state.page + 1}`)
                .then(data => {
                state.quotesBySearchNext=data.data
              })
              })
                .catch(err=>{
                  if (err) {
                    // Case 3 None Put array empty
                    state.quotesBySearch=[]
                  }
                })
            }
          })
          
        }
    
    }
  })
}

export default createStore