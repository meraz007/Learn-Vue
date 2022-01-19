<template>
<div>
    <h1>customer Details{{$route.params.id}}</h1>
    <p v-for="(item,index) in items" :key="index">{{ item.details}}</p>
</div>
</template>

<script>
export default {
    name:'projectDetails',
    props:['items']

}
</script>

<style>

</style>