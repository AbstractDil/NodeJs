Vue.createApp({

    data(){
        return {
        
            msg : "Hey Sagar! How are you?",
            changeBg : false,
           
            
        }
    },

    methods:{
        toggle(){
            alert(this.msg + "\n Msg Length is " +this.msg.length);
            this.changeBg = !this.changeBg;
            
        }
    }

    }).mount("#app");