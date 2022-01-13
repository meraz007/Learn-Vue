<template>

   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
      <router-link class="navbar-brand" :to="{path:'/'}">Easy-Day-Shopping</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex me-auto">
        <input @submit.prevent="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="keyWord">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
import axios from 'axios'
export default {
    data(){
      return{
        keyWord:''
      }
    },
    methods:{
      search(){
        var self =this
        axios.get('http://localhost:3000/search/' + this.keyWord).then(response =>{
          self.$store.commit('setInventory',response.data)
        })
      }
    }
}
</script>

<style>

</style>
