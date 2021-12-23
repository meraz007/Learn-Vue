<template>
 <h1>Hello {{ name }}</h1>
 <p v-text="age"></p>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      name :'saiful',
      age :'He is ' + 25 +' years old'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
