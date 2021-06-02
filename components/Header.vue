<template>
  <!--Navigation Panel -->
  <LazyHydrate>
      <div class="bg-gray-100 h-10 mb-6 flex p-1 justify-center ">
      <span class="text-gray-600 text-sm font-semibold">{{str}}</span>
    </div>
  </LazyHydrate>

</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
export default{

  props:['str'],
  components:{
    LazyHydrate
  }

}

</script>


<style>
</style>
