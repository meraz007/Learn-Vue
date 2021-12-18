const app =Vue.createApp({
    data(){
        return{
            productName:"Socks",
            cart:0,
            product:'img/socks_green.jpg',
            inventry:10,
            product_deatils:['100% cotton','10% spandix'],
            product_id_color:[
                {id:123,color:"green",image:"img/socks_green.jpg"},
                {id:124,color:"blue",image:"img/socks_blue.jpg"}
            ]
        }
    },
    methods:{
        addToCart(){
            this.cart +=1
        },
        reduceToCart(){
            this.cart -=1
    },
        updateImage(variantImage){
            this.product=variantImage
        }
    },
})
app.mount('#app')