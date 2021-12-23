<template>
 <h1>Hello {{ name }}</h1>
 <p v-text="age"></p>
 <p v-html="details"></p>
 <button :disabled="!isDisabled">Bind</button>
 <p :class="[isPromoted ? 'color':'new']" >this is a paragraph</p>
 <button >Click</button>
 <h2 :style="{color:heighlightColor,'font-size':fontSize + 'px'}">This is our another Heading</h2>
 <h3 :style="[successStyleObj,anotherStyleObj]">This is inline style binding</h3>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      name :'saiful',
      age :'He is ' + 25 +' years old',
      details : '<b>My life is a fucking Awesome!</b>',
      headingId : 'Heading',
      isDisabled : true,
      isPromoted :true,
      heighlightColor : 'red',
      fontSize : 50,
      successStyleObj :{
        color:'success',
        background:'black',
        fontSize:'40px'
      },
      anotherStyleObj:{
        padding:'10px'
      }
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
.color{
  background-color: black;
  color: white;
  width: 200px;
  text-align: center;
  margin: auto;
  padding: 10px;
  }
  .new{
    background-color: tomato;
  }
</style>
