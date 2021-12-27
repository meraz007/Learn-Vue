<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <div class="container">
      <b-navbar-brand to="/" >EasyDay Shopping </b-navbar-brand>
      <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
      <div class="input-group">
        <input class="form-control" id="address-bar" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
        <div class="input-group-append mx-2">
        <button class="btn btn-outline-light" type="submit">Search</button>
        </div>
      </div>
      </form>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </div>
  </b-navbar>
</template>

<script>
import axios from 'axios'
export default {

  data(){
    return{
      keyword:''
    }
  },
  methods:{
    search(){
      axios.get('http://localhost:3000/search/' + this.keyword).then(response =>{
        console.log(response)
      })
    }
  }

}
</script>

<style>

</style>