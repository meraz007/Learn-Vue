<template>
  <div id="app">
  <navbar @search="search"></navbar>
  <!--Card Section-->
  <b-container class="bv-example-row mt-4">
  <b-row>
    <b-col cols="9">
      <router-view></router-view>
      <!--<inventory @addedNewItem="addCartItem"  :items='items'></inventory>-->
    </b-col>
    <b-col cols="3">
      <Cart :items='cart' ></Cart> 
    </b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cart from './components/Cart.vue'
//import Inventory from './components/views/Inventory.vue'
import data from './data.js'

export default {
  components:{
    Navbar,
    Cart
    //Inventory
  },
  data(){
    return{
      items:[],
      cart:[]
    }
  },
  mounted(){
    this.items=data
  },
  methods:{
    addCartItem(item){
      this.cart.push(item)
    },
    search(keyword){
      this.items=data.filter(item =>{
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !==-1
      })
    },
  }
}
</script>

<style>

</style>
