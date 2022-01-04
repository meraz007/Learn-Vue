<template>
  <header>
      <h1>This is our heading section</h1>
      <!--<ul>
          <li v-for="stu in myStudents" :key="stu">{{ stu }}</li>
      </ul>-->
      <div>
          <p>FirstName :{{ firstName}}</p>
          <p>LastName: {{ LastName}}</p>
          <p>Age: {{age}}</p>
          <button @click="updateName">click me</button>
      </div>
  </header>
</template>

<script>
export default {
    
    props:
    {
        firstName:String,
        LastName :String,
        age :Number
    },
    methods:{
        updateName(){
            this.$emit('updateValue','Saiful') 
        }
    }

}
</script>

<style>

</style>