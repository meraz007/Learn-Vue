<template>
  <b-row>
        <b-col cols="3" v-for="(item,index) in items" :key="index">
          <div>
          <b-card
            :title="item.title"
            :img-src="item.photo"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>{{ item.price }}</b-card-text>

            <b-button href="#" variant="primary">Add to Cart</b-button>
          </b-card>
          </div>
        </b-col>
      </b-row>
</template>

<script>
export default {
  props:['items']
}
</script>

<style>

</style>