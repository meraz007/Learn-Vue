<template>
  <div id="app">
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
  <!--Card Section-->
  <b-container class="bv-example-row mt-4">
  <b-row>
    <b-col cols="9">
      <b-row>
        <b-col cols="3">
          <div>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
          </div>
        </b-col>
        <b-col cols="3">
           <div>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
          </div>
        </b-col>
        <b-col cols="3">
           <div>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
          </div>
        </b-col>
        <b-col cols="3">
           <div>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
          </div>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="3">
      <b-list-group>
        <b-list-group-item>Item - Price </b-list-group-item>
        <b-list-group-item>Item - Price </b-list-group-item>
        <b-list-group-item>Item - Price </b-list-group-item>
        
      </b-list-group>
    </b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>

export default {
}
</script>

<style>

</style>
