import {createClient } from '@supabase/supabase-js'
const apikey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvZXZkZWFsaGxxZW9namhpd25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzNzcxOTAsImV4cCI6MjAzOTk1MzE5MH0.PQckQni66Ua_IFx_g0ZKVyE5XS4B_3O56Ue2eL1JEq4
const BACKEND_URL = "https://hoevdealhlqeogjhiwnk.supabase.co/rest/v1"
async function updateBanhos(){
    try{
        const getBanhosUrl = '${BACKEND_URL}/${URL_Banho}?apikey=${APIKEY}'
        var response = await fetch(getBanhosUrl);
        var data = await response.jason()
        console.log(data)
        for(let index in data){
            const banho = data[index];
            const banhoElement = $("<li></li>").text(banho.id+"-"+banho.)
        }
    }
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});
