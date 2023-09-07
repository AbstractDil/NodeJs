
Vue.createApp({

    data(){
        return {
           
            title: "Learning Vue 3",
            description: "Welcome to the Vue 3 crash course!",
            textClass : "text-danger",
            imgUrl : "https://res.cloudinary.com/practicaldev/image/fetch/s--I4FWon9Y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg",
            btnUrl : "https://vuejs.org",
            cardWidth : "18",
            isAlert: false,
            isAvailable : true

        }
    }

}).mount("#app");