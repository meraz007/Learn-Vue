<template>
  <div id="app">
  <navbar></navbar>
  <!--Card Section-->
  <b-container class="bv-example-row mt-4">
  <b-row>
    <b-col cols="9">
      <inventory></inventory>
    </b-col>
    <b-col cols="3">
      <Cart></Cart> 
    </b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cart from './components/Cart.vue'
import Inventory from './components/Inventory.vue'
export default {
  components:{
    Navbar,
    Cart,
    Inventory
  }
}
</script>

<style>

</style>
