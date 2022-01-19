<template>
  <div>
    <h1>project List</h1>
      <div class="row">
          <div class="col-md-4" v-for="(item,index) in items" :key="index">
              <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <p class="card-text">{{ item.details }}</p>
                    <router-link to="ProjectDetails/1"><a  class="btn btn-primary">Show Details</a></router-link>
                    
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'projectList',
    props:['items']

}
</script>

<style>

</style>