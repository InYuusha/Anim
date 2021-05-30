import Vuex from 'vuex'



const createStore = () => {


    
    return new Vuex.Store({
      
    state: {
      quotes:[]
    },
      mutations: {
          getQuotes(state) {
              this.$axios
                .get("https://animechan.vercel.app/api/quotes")
                  .then(data => {
                      state.quotes = data.data;
                  
                });
        }
    
    }
  })
}

export default createStore