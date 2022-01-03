<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="">Easy-Day-Shopping</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex me-auto">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="btn-group dropstart">
        <button type="button" class="btn btn-success " data-bs-toggle="dropdown" aria-expanded="false">
          Cart(2)
        </button>
        <ul class="dropdown-menu">
          <!-- Dropdown menu links -->
          <li><a class="dropdown-item">Action <button class="btn btn-danger">X</button></a></li>
          <li><a class="dropdown-item">Another action <button class="btn btn-danger">X</button></a></li>
          <li><a class="dropdown-item">Something else here <button class="btn btn-danger">X</button></a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" >Total:</a></li>
        </ul>
    </div>
    </div>
  </div>
</nav>
    <router-view />
  </div>
</template>

<style>

</style>
