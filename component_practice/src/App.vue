<template>
  <div id="app">
    <Header/>
    <h1>{{ name }}</h1>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  data(){
    return{
      name:'saiful'
    }
  },
  components: {
   Header,
   Footer
  }
  
}
</script>

<style>

</style>
