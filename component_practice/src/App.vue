<template>
  <div id="app">
    <Header :myStudents="students"/>
    <Footer :myStudents="students" />
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  data(){
    return{
      students:['saiful','Aamin','Kader']
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
