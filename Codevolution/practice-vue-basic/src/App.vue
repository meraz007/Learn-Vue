<template>
<div>
 <h1>Hello {{ names[0] }}</h1>
 <p v-text="age"></p>
 <p v-html="details"></p>
 <button :disabled="!isDisabled">Bind</button>
 <p :class="[isPromoted ? 'color':'new']" >this is a paragraph</p>
 <button >Click</button>
 <h2 :style="{color:heighlightColor,'font-size':fontSize + 'px'}">This is our another Heading</h2>
 <h3 :style="[successStyleObj,anotherStyleObj]">This is inline style binding</h3>

 <h1 v-if="num<0">The number is less then 0 and number is: {{ num }}</h1>
 <h1 v-else-if="num >0">The number is greater then 0 and number is: {{ num }}</h1>
 <h1 v-else>This is not a number,this is a {{ num }}</h1>
 <h1 v-show="isDisabled">v-show conditional randaring</h1>
 <ul>
   <li v-for="(name,index) in names" :key="name">{{index}}{{name}}</li>
 </ul>
 <h1 v-for="name in fullName" :key="name">{{ name.first}} {{ name.last }}</h1>

 <div v-for="actor in actors" :key="actor.name">
   <h2>{{ actor.name }}</h2>
   <h3 v-for="movie in actor.movieName" :key="movie">{{ movie }}</h3>
 </div>
</div>
<h1>sum is {{ addTwoNumber(3,5)}}</h1>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{

      names :['saiful','Aamin','Rohan'],
      fullName :[
        {first:'saiful',last:'islam'},
        {first:"Aamin",last:'Khan'}
      ],
      actors:[
        {
          name:'Chirstian Bale',
          movieName :['BatMan','prestige']
        },
        {
          name:'Di Capario',
          movieName:['Taitanic','Inception']
        }
      ],
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
      },
      num:8
    }
  },
  methods:{
    addTwoNumber(a,b){
      var add = a+b;
      return add
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
