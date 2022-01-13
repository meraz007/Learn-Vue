<template>
  <div>
    <button class="btn btn-success float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-bag"></i>Cart ({{ counter }})</button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div v-if="items.length >0">
          <div v-for="(item,index) in items" :key="index">
            <p>{{item.title}}-- {{item.price}} <button @click="removeItem(index)" class="btn btn-danger">X</button></p>
            <hr>
            <p>Total Price: {{ totalPrice }} </p>
            <button class="btn btn-success">CheckOut</button>
          </div>
        </div>
        <div v-else>
          <h1>Please Added A Item!</h1>
        </div>
      </div>
    </div>
      </div>
</template>

<script>

export default {
  methods:{
    removeItem(index){
      this.items.splice(index,1)
    }
  },
  computed:{
    items(){
      return this.$store.getters.getCart
    },
    totalPrice(){
    var total=0;
    this.items.forEach(item => {
      total +=parseFloat(item.price)
    });
    return total
  }
  }

}
</script>

<style>

</style>