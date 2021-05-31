<template>
<div class=" bg-gray-200 w-1/2 p-4 mx-auto my-2">
    <h2 class="text-md font-medium text-gray-700">{{quote.quote}}</h2>
    <p class="text-right text-gray-800">{{quote.character}}</p>
    <p class="text-right text-sm text-gray-500">{{quote.anime}}</p>
    
</div>

</template>
<script>
export default{
    props:['quote']
}
</script>

<style>

</style>
