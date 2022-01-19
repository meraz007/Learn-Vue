<template>
  <div class="home">
    <Main :name="name" />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/main.vue'

export default {
  name: 'Home',
  components: {
    Main,
  },
  data(){
    return{
      name:"saiful"
    }
  }
}
</script>
