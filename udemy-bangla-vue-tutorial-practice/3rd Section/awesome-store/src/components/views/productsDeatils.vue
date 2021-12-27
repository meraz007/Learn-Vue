<template>
<div v-if="item">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="item.photo" alt="Image" class="rounded-0"></b-card-img>
        <b-button @click="addToItem(item)" class=" cnt" variant="success">Add To Cart</b-button>
      </b-col>
      <b-col md="6">
        <b-card-body :title="item.title">
          <b-card-text>
            <span class="card-text">Price: ${{ item.price }}</span>
            <p>{{item.description}}</p>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
<h3 v-else>Loading...</h3>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      item:[]
    }
  },
  mounted(){
    this.fetchItem()
  },
  methods:{
    addToItem(item){
      this.$store.commit('addToCart',item)
    },
    fetchItem(){
      var self =this
      axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response =>{
        self.item=response.data
      })
    },
    
  }
}
</script>

<style>
.cnt{
    margin-top: 10px;
    margin-left: 60px;
}
</style>