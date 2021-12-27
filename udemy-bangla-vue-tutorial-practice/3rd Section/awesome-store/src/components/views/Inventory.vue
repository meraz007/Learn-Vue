<template>
  <b-row>
        <b-col cols="3" v-for="(item,index) in items" :key="index">
          <div>
            <router-link :to="{ path: '/item/' + item.id }">
            <b-card
            :title="item.title"
            :img-src="item.photo"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>{{ item.price }}</b-card-text>
          </b-card>
          </router-link>
           <b-button @click="addToItem(item)" variant="primary">Add to Cart</b-button>
          </div>
        </b-col>
      </b-row>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      items:[]
    }
  },
  mounted(){
    this.fetchInventory()
  },
  methods:{
    addToItem(item){
      this.$store.commit('addToCart',item)
    },
    fetchInventory(){
      var self =this;
      axios.get('http://localhost:3000/items').then(response =>{
        self.items=response.data
      })
    }
  }
}
</script>

<style>

</style>