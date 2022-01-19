<template>
  <div>
      <h1>Slots practice!!</h1>
      <div class="style_div">
          <div class="card-header">
            <slot name="header"></slot>
          </div>
          <div class="card-content">
            <slot></slot>
          </div>
          <div class="card-footer">
            <slot name="footer"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'slot',
}
</script>

<style scoped>
.style_div{
    width: 200px;
    height: 200px;
    border: 1px solid black;
}
</style>