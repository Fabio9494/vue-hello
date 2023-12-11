const {createApp} = Vue;

createApp({
    data(){
        return {
            message: "CIAO",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Piaggio_Ciao_SC_Arcobaleno_1973.jpg"
        }
    }
}).mount("#app");