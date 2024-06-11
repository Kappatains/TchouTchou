//Tentative dans ce fichier type middleware de créer des fonctions qui ont pour but de mettre à jour les objet en fonction des créations d'objet.
//Les règles de mise à jour serais les suivants (pas spécifié dans la spec donc libre)
//Une ville peut être créer toute seule

//Une Gare doit être créer avec une ville (Required : true)
//Mettre à jour la ville pour associé la gare nouvellement créé. => updateCity

//Une ligne doit être créé avec une gare (required: true)
//Mettre à jour la gare pour associé la ligne nouvellement créé

//Si une ligne est mise à jour, mettre à jour les gares 
//Si une gare est mise à jour, mettre à jour la/les villes

//Si une gare est détruite, mettre à jour la/les villes et mettre à jour la/les lignes
//Si une ligne est annulé, mettre à jour les gares

//Cela répresente donc 4 fonctions qui doivent appeler à minima 2 API différente.

const apiGare = "http://localhost:3001/gare/";
const apiCity = "http://localhost:3001/city/";
const apiLine = "http://localhost:3001/line/";

app.get()

function updateCity(){
    request(apiGare, function(error, response, body){
        console.log(response);
        console.log(body)
    });
}
module.exports = updateCity;