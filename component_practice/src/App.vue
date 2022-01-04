<template>
  <div id="app">
    <div class="container">
      <Header 
    :myStudents="students" 
    :firstName ="fName"
    :LastName ="lName"
    :age="myAge"
    @updateValue ="fName = $event"
    />
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    <Footer :myStudents="students" />
    </div>
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
