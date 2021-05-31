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
          this.$axios.get(`https://animechan.vercel.app/api/quotes/anime?title=${search}`)
            .then(data => {
              
              state.quotesBySearch = data.data;
            })
          
        }
    
    }
  })
}

export default createStore