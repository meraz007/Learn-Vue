<template>
  <div class="hello">
    <h1 v-if="isVisible">{{name}}</h1>
    <button @click="showHide">Toggle Button</button>
    <p v-if="isVisible" class="box"></p>
  </div>
</template>

<script>
export default {
  name: 'main',
  props:['name'],
  data(){
    return{
      isVisible:false
    }
  },
  methods:{
    showHide(){
      return this.isVisible=!this.isVisible
    }
  }

}
</script>

<style scoped>
.box{
  width: 200px;
  height: 200px;
  background-color: aqua;
}
</style>
