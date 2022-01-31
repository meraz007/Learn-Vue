<template>
  <div class="home">
    <div class="row">
      <div class="col-md-6">
        <Card>
          <div class="card-header">
            Featured
          </div>
          <template v-slot:body>
            <div class="card-body">
              <h5 class="card-title">Special title Featured</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </template>
        </Card>
        <Card>
          <div class="card-header">
            Food
          </div>
          <template v-slot:body>
            <div class="card-body">
              <h5 class="card-title">Special title Food</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </template>
        </Card>
      </div>
      <div class="col-md-6">
        <Card>
          <div class="card-header">
            Sports
          </div>
          <template v-slot:body>
            <div class="card-body">
              <h5 class="card-title">Special title Sports</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </template>
        </Card>
        <Card>
          <div class="card-header">
            Movies
          </div>
          <template v-slot:body>
            <div class="card-body">
              <h5 class="card-title">Special title Movies</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </template>
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
