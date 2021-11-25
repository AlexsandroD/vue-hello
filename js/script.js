const app = new Vue({
    el:'#root',
    data:{
        message:'hello Vue!!!',
        myClass:'blue',
        source:'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80'
    },
    methods:{
        myTogle: function() {
        if(this.myClass == 'blue'){
            this.myClass = 'red';
        }else if(this.myClass == 'red'){
            this.myClass = 'green';
        }else{this.myClass = 'blue'}
    
    }}
});

