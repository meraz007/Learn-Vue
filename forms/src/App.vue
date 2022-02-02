<template>
    <form @submit.prevent="getOutput">
      <label for="">Name:</label>
      <input type="text" v-model="inputItem.name">
      <label for="">Number</label>
      <input type="number" v-model="inputItem.number">
      <label for="">Select Your favorite Car</label>
    <select v-model="inputItem.fCar">
      <option value="Audi">Audi</option>
      <option value="Audi">Audi</option>
      <option value="Citroen">Citroen</option>
      <option value="Ford">Ford</option>
  </select>
   <div>
     <label for="">Add Your favorite Number:</label>
     <label class="container">One
    <input type="checkbox" value="One" v-model="inputItem.fNumber">
    <span class="checkmark"></span>
  </label>

  <label class="container">Two
    <input type="checkbox" value="Two" v-model="inputItem.fNumber">
    <span class="checkmark"></span>
  </label>

  <label class="container">Three
    <input type="checkbox" value="Three" v-model="inputItem.fNumber">
    <span class="checkmark"></span>
  </label>

  <label class="container">Four
    <input type="checkbox" value="Four" v-model="inputItem.fNumber">
    <span class="checkmark"></span>
  </label>
  </div>
   <p>Please select your favorite Web language:</p>
    <input type="radio" id="html" name="fav_language" value="HTML" v-model="inputItem.fWeb">
    <label for="html">HTML</label><br>
    <input type="radio" id="css" name="fav_language" value="CSS" v-model="inputItem.fWeb">
    <label for="css">CSS</label><br>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript" v-model="inputItem.fWeb">
    <label for="javascript">JavaScript</label>

    <button>Submit</button>
</form>
</template>

<script>


export default {
  name: 'App',
  components: {},
  data(){
    return{
      inputItem:{
        name:'',
        number:null,
        fCar :'',
        fNumber:[],
        fWeb:''
      }
    }
  },
  methods:{
    getOutput(){
      console.log(this.inputItem.fNumber)
    }
  }
}
</script>

<style>

</style>
