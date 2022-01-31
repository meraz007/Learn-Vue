<template>
  <div class="home">
    <div class="row">
       <Slots />
    </div>
  </div>
</template>

<script>
import Slots from '../components/slots.vue'
export default {
  name: 'Home',
  components: {
    Slots,
  }
}
</script>
