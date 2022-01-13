<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
     <Cart :items="cart"></Cart>
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cart from './components/Cart.vue'
import data from './Data/data.js'
export default {
  components:{
    Navbar,
    Cart,
  },
  data(){
    return{
      items:[],
      cart:[],
    }
  },
  
  mounted(){
    this.items=data
  }
}
</script>

<style>

</style>
