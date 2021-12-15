const app=Vue.createApp({
    data(){
        return{
            para:"This is my practice vue with udemy course",
            para1:"This is another practice about vue",
            vueLink:'https://v3.vuejs.org/'

        }
    },
    methods:{
        ourGoal(){
            const check =2;
            if(check>1){
                return this.para
            }else{
                return this.para1
            }
        }
    }
}) 
app.mount('#user-goal');