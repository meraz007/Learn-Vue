<template>
<div>
  <h1 v-text="greatting"></h1>
  <h1 :class="!isPromoted && 'text-danger text' " v-text="greatting"></h1>
  <button @click="addingNumber"> add</button>
  <Slot>Slot Content</Slot>
  <Slot>
    <h2>Slot Content</h2>
  </Slot>
  <Slot>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sed?</p>
  </Slot>
  <Slot>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <template v-slot:default>
      <h1>default</h1>
    </template>
    <template v-slot:footer>
      <button>View Details</button>
    </template>
  </Slot>
  <Slot>
    <template v-slot:header>
      <h3>Header1</h3>
    </template>
    <template v-slot:default>
      <h1>default1</h1>
    </template>
    <template v-slot:footer>
      <button>View Details1</button>
    </template>
  </Slot>
  <h1>{{ num }}</h1>
  <form>
    <div>
      <label for="Name">Name:</label>
      <input type="text" v-model="formValues.name">
    </div>
    <div>
      <label for="Name">Phone:</label>
      <input type="number" v-model="formValues.phone">
    </div>
    <div>
      <label for="cars">Choose a Country:</label>
        <select v-model="formValues.country">
          <option value="">Select A Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
        </select>
    </div>
    <div>
      <label for="cars">Choose Your Favorite Food:</label>
        <select multiple v-model="formValues.food">
          <option value="">Select A Country</option>
          <option value="Rice">Rice</option>
          <option value="Cake">Cake</option>
          <option value="Coca Cola">Coca Cola</option>
        </select>
    </div>
  </form>
  <p>{{formValues.name}}</p>
  <p>{{formValues.phone}}</p>
  <p>{{formValues.country}}</p>
  <p>{{formValues.food}}</p>
</div>
</template>

<script>
import Slot from './components/slot.vue'
export default {
  name: 'App',
  components:{
    Slot,
  },
  data(){
    return{
      greatting:"Hello Vue!!",
      isPromoted: false,
      num : 0,
      formValues:{
        name:'',
        phone:'',
        country:'',
        food:[]
      }
    }
  },
  methods:{
    addingNumber(){
      this.num +=1
      if(this.num===10 && this.num>0){
        this.num -=1
      }
    }
  }

}
</script>

<style scoped>
.text-danger{
  color: red;
}
.text{
  text-decoration: underline;
}
</style>
