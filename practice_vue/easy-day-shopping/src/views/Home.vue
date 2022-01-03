<template>
  <div class="home">
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-3" v-for="(item,index) in items" :key="index">
          <div class="card">
          <img :src="item.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p>{{ item.price }}</p>
            <p class="card-text">{{item.productDetails}}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
        </div>
      </div>
      <input type="text" v-model="name">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data(){
    return{
      items:[
        {name:'Rice',price:50,img:'https://picsum.photos/id/1005/600/200',productDetails:"Contrary to popular belief, Lorem Ipsum is not simply random text."},
        {name:'Rice',price:50,img:'https://picsum.photos/id/1005/600/200',productDetails:"Contrary to popular belief, Lorem Ipsum is not simply random text."},
        {name:'Rice',price:50,img:'https://picsum.photos/id/1005/600/200',productDetails:"Contrary to popular belief, Lorem Ipsum is not simply random text."},
        {name:'Rice',price:50,img:'https://picsum.photos/id/1005/600/200',productDetails:"Contrary to popular belief, Lorem Ipsum is not simply random text."},
      ],
      name:''
    }
  },
  methods:{ 
  }
};
</script>
