import {createClient } from '@supabase/supabase-js'
const apikey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvZXZkZWFsaGxxZW9namhpd25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzNzcxOTAsImV4cCI6MjAzOTk1MzE5MH0.PQckQni66Ua_IFx_g0ZKVyE5XS4B_3O56Ue2eL1JEq4
const BACKEND_URL = "https://hoevdealhlqeogjhiwnk.supabase.co/rest/v1"
const URI_BANHO = "banho"
async function updateBanho(){
    try{
        const listOfBanhoElement = $("#listOfBanho");
        listOfBanhoElement.empty()
        const getBanhoUrl = '${BACKEND_URL}/${URI_BANHO}?apikey=${APIKEY}'
        var response = await fetch(getBanhoUrl);
        var data = await response.json()
        console.log(data)
        for (let index in data){
            const banho = data[index]
            const banhoElement = $("<li></li>".text(banho.id_banho + "-" + banho.banho_rapido + "-" + banho.banho_relaxante + "-" + banho.completo)
            const deleteElement = $("<button>confirmar</button>").click(()=>deletBanho(banho.id_banho))
            banhoElement.append(banhoElement)
            listOfBanhoElement.append(banhoElement)
        }
    }catch(error){
        console.error("Erro",response.status)
    }
}
async function createBanhos(){
    try{
       const banho_rapido = $("#banho_rapido")[0].value
       const banho_relaxante = $("#banho_relaxante")[0].value
       const completo = {"banho_rapido": banho_rapidoBanho,"banho_relaxante":banho_relaxanteBanho}
       const postBanhoUrl = '${BACKEND_URL}/${UI_BANHO}'
       var response = await fetch(postBanhoUrl,{
           headers: {
               "apikey": apikey,
               "Authoization": "Beare" + apikey,
               "Content-Type": "aplication/json"
           },
           method: "POST",
           body: JSON.stringify(banho)
       });
       if(response.status ==201){
           alert("Banho marcado com sucesso")
           updateBanho()
       }else{
           alert("Ocorreu um erro"+ response.status)
       }
    }catch(error){
           console.error("Erro", response.status)
        }
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});
