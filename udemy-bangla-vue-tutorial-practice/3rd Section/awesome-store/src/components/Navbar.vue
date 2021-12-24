<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <div class="container">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <form class="form-inline my-2 my-lg-0">
      <div class="input-group">
        <input class="form-control" id="address-bar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append mx-2">
        <button class="btn btn-outline-light" type="submit">Search</button>
        </div>
      </div>
      </form>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </div>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>