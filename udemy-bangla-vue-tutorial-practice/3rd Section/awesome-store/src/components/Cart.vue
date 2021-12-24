<template>
<b-list-group>
    <b-list-group-item>Name - Price </b-list-group-item>
    <b-list-group-item v-for="(item,index) in items" :key="index">{{ item.title }}-{{item.price}}</b-list-group-item>
    <b-list-group-item>Total {{ totalPrice }}</b-list-group-item>
    
</b-list-group>

</template>

<script>
export default {
    props :['items'],
    computed:{
        totalPrice(){
            var total =0;
            this.items.forEach(item => {
                total +=parseFloat(item.price) 
            });
            return total
        }
    }

}
</script>

<style>

</style>