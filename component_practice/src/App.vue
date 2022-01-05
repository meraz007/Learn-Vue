<template>
  <div id="app">
    <div class="container">
      <transition name="appear">
        <div class="bg-success" v-if="display">
        <h1 class="text-white">Headding</h1>
      </div>
      </transition>
      <div>
        <button 
        class="btn btn-info"
        @click="changeHeading"
         >Toggle</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      display:false
    }
  },
  methods:{
    changeHeading(){
      this.display=!this.display
    }
  }
}
</script>

<style>
.appear-enter{
  opacity: 0;
}
.appear-enter-active{
  transition: opacity 3s;
}
.appear-leave-active{
  opacity: 0;
  transition: opacity 3s;
}
</style>
