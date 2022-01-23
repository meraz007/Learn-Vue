<template>
  <div class="container">
      <div class="row justify-content-center mt-4">
          <div class="col-md-8">
              <img :src="item.photo" alt="">
              <div class="float-end">
                <h1>{{ item.title }}</h1>
                <p>{{ item.description }}</p>
                <p><span class="fw-bold">Price $</span> {{item.price}}</p>
                <button @click="addItem(item)" class="btn btn-success">Add To Cart</button>
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {   
    data(){
        return{
            item :null
        }
    },
    mounted(){
        this.fetchItemDeatils()
    },
    methods:{
        fetchItemDeatils(){
            var self=this
            axios.get('http://localhost:3000/item/'+ this.$route.params.id).then(response =>{
            self.item=response.data
            })
        },
        addItem(item){
            this.$store.commit('addToCart',item)
        },
    }
}
</script>

<style>

</style>