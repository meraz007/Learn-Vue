<template>
  <div class="home">
    <div class="row">
      <div class="col-md-6">
        <Card>
          <div class="card-header">
            Featured
          </div>
        </Card>
        <Card>
          <div class="card-header">
            Food
          </div>
        </Card>
      </div>
      <div class="col-md-6">
        <Card>
          <div class="card-header">
            Sports
          </div>
        </Card>
        <Card>
          <div class="card-header">
            Movies
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>
