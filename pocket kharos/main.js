const app = {
    data(){
        return{
            items:[
                {title:'Cigarette',price:40},
                {title:'Tea & Snakes',price:30},
                {title:'Bus Rent',price:20}
            ],
            inputForm:{
                Atitle:'',
                Bprice:null
            }       
        }
    },
    methods:{
        remove(index){
            this.items.splice(index,1)
        },
        addItem(){
            this.items.push({title:this.inputForm.Atitle,price:this.inputForm.Bprice})
        }
    },
    computed:{
        total(){
            var total=0;
            this.items.forEach(item => {
                total += item.price
            });
            return total
        }
    }
}
Vue.createApp(app).mount('#app')