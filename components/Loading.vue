<template>
  <!--Loading-->
  <div v-if="list.length==0" class="mx-auto w-2/3 p-4 flex mb-4 justify-center">
  <span class="text-lg font-semibold text-gray-700">Just a moment...</span>
  </div>

</template>

<script>
export default{
  props:['list']

}
</script>