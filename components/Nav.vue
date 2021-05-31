<template>
  <div class="pb-6">
    <div class="bg-gray-700 p-4 px-10  shadow-3xl flex justify-between">
      

        <button class="w-10 h-10 border-4 border-gray-50  text-center text-gray-100 ">
            A
        </button>

        <div>
         <input
        src=""
        v-on:keyup.enter="getSearch()"
        v-model="search"
        value="Search By Anime or Character"
        name="#"
        class=" h-11 shadow-sm rounded w-36 px-2  focus:ring-2 focus:ring-pink-500 text-grey-700"
      />
      <button
        v-on:click="getSearch()"
        class=" w-16 h-11 rounded-md text-white text-sm   bg-gray-900"
      >
        Search
      </button>
        </div>
   
    </div>
    <!--Navigation Panel -->
    <div class="bg-gray-100 h-10 flex justify-center align-middle">
      <div class="flex align-middle ">
        <button @click="prevPage()"> <p class="mx-2 text-gray-600 text-sm">Prev</p> </button>
        <button v-on:click="nextPage()">
          <p class="mx-2 text-gray-600 text-sm">Next</p>
        </button>
      </div>
    </div>

    <!-- End of nav -->
  </div>
</template>

<script>
export default {
  data: () => ({
    search: ""
  }),
  methods: {
    getSearch() {
      this.$store.commit("getSearchQuotes", {
        search: this.search
      });
      this.$router.push({
        path: `/search?s=${this.search}&page=${this.getPage}`
      });
    },
    nextPage() {
      
      this.$store.state.page += 1;
      this.$store.commit("getSearchQuotes", {
        search: this.$route.query.s
      });
      this.$router.push(`/search?s=${this.search}&page=${this.getPage}`);
    },
    prevPage(){
    this.$store.state.page -= 1;
      this.$store.commit("getSearchQuotes", {
        search: this.$route.query.s
      });
      this.$router.push(`/search?s=${this.search}&page=${this.getPage}`);

    }
  },
  computed: {
    getPage() {
      return this.$store.state.page;
    }
  }
};
</script>
