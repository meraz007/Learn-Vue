var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      items:[
          {name:'Rice',price:20},
          {name:'Egg',price:40},
          {name:'Sweat',price:120},
          {name:'Banana',price:20},
      ],
      newItem:''
    },
    methods:{
        addItem(){
            this.items.push({
                name:this.newItem,
                price:0
            })
        },
        removeItem(index){
            this.items.splice(index,1)
        }
    },
    computed:{
        total(){
            var total =0;
            this.items.forEach(item => {
                total +=item.price
            });
            return total
        }
    }
  })