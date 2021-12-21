const app =Vue.createApp({
    data(){
        return{
            productName:"Socks",
            cart:0,
            selectedVariant: 0,
            product_deatils:['100% cotton','10% spandix'],
            product_id_color:[
                {id:123,color:"green",image:"img/socks_green.jpg",quantity:50},
                {id:124,color:"blue",image:"img/socks_blue.jpg",quantity:0}
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
        updateVariaint(index){
            this.selectedVariant =index
    }
    },
    computed:{
        product(){
            return this.product_id_color[this.selectedVariant].image
        },
        inStock(){
            return this.product_id_color[this.selectedVariant].quantity
        }
    }
})
app.mount('#app')