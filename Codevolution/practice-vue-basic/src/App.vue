<template>
 <h1>Hello {{ name }}</h1>
 <p v-text="age"></p>
 <p v-html="details"></p>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      name :'saiful',
      age :'He is ' + 25 +' years old',
      details : '<b>My life is a fucking Awesome!</b>'
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
