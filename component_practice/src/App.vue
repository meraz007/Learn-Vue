<template>
  <div id="app">
    <Header 
    :myStudents="students" 
    :firstName ="fName"
    :LastName ="lName"
    :age="myAge"
    @updateValue ="fName = $event"

    />
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
      students:['saiful','Aamin','Kader'],
      fName:"Jon",
      lName:"Doe",
      myAge:21
    }
  },
  components: {
   Header,
   Footer,
  }
  
}
</script>

<style>

</style>
