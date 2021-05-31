import Vuex from 'vuex'



const createStore = () => {


    
    return new Vuex.Store({
      
    state: {
      quotes:[],
      quotesBySearch:[]
    },
      mutations: {
        /* Get 10 Random Quotes
        params:null
         */
          getQuotes(state) {
              this.$axios
                .get("https://animechan.vercel.app/api/quotes")
                .then(data => {
                    
                      state.quotes = data.data;
                  
                });
        },
        getSearchQuotes(state, { search }) {
          /*Case 1 Get Quotes By Anime */
          this.$axios.get(`https://animechan.vercel.app/api/quotes/anime?title=${search}`)
            .then(data => {
              state.quotesBySearch = data.data
            
            })
            .catch(err => {
              if (err) {
                /* Case 2 Get Quotes By character*/
              this.$axios.get(
                `https://animechan.vercel.app/api/quotes/character?name=${search}`
              ).then(data => {
                state.quotesBySearch = data.data
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