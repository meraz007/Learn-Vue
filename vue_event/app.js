const app =Vue.createApp({
  data(){
    return{
      counter:0,
      num:5,
      name: '',
      lastName:"Islam",
      confirmedName:"",
    }
  },
  methods:{
    confirm(){
      this.confirmedName=this.name;
    },
    setName(event,lastName){
      this.name= event.target.value + " " +lastName
    },
    add(){
      this.counter =this.counter  + this.num
    },
    reduce(){
      this.counter =this.counter - this.num
    }
  }
});

app.mount('#events');
