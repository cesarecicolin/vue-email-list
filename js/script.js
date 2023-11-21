// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.
// Buon lavoro :api: :muscolo:
const { createApp } = Vue

createApp({
  data() {
    
    return {
      message: 'Hello Vue!',
      newEmail: []
    }
  },
  methods:{
     genereateEmail(){
        for (let i = 0; i < 10; i++) {
            axios
            .get("https:flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
               
               const Element = resp.data.response
             this.newEmail.push({Element})
   
            })  
            
        }
       
    
      },
     
    
  }
}).mount('#app')