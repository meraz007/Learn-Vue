<template>
  <div class="row mt-3">
        <div class=" col-lg-2 col-md-4 col-sm-3" v-for="(item,index) in items" :key="index">
          <div class="card">
            <router-link :to="{ path: '/item/'+ item.id }">
              <img :src="item.photo" class="card-img-top" alt="...">
            </router-link>
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p>{{ item.price }}</p>
            <p class="card-text">{{item.productDetails}}</p>
            <a @click="addItem(item)" class="btn btn-primary">Add to Cart</a>
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
          
        }
    },
    computed:{
      items(){
        return this.$store.getters.getInventory
      }
    },
    mounted(){
      this.fetchInventory()
    },
    methods:{
        addItem(item){
            this.$store.commit('addToCart',item)
            this.counter +=1
        },
        fetchInventory(){
          var self=this
          axios.get('http://localhost:3000/items').then(response =>{
            self.$store.commit('setInventory',response.data)
          })
        }
    }

}
</script>

<style>

</style>