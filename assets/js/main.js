/*Il programma dovrà chiedere all'utente:
 il numero di chilometri che vuole percorrere
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca, oltre alla ricerca da fare per ricordarsi come calcolare uno sconto (Googlate qulcosa del tipo: come si calcola lo sconto? e cercate una risorsa che vi possa aiutare a capire cosa fare)*/


//chiedere all'utente:il numero di chilometri che vuole percorrere
const passengerKm = Number(prompt("Che distanza vui percorrere?"));
console.log(passengerKm);

//chiedere l'età del passeggero
const passengerAge = Number(prompt("Quanti anni hai?"));
console.log(passengerAge);

//calcolare il prezzo totale del viaggio(0.21 € al km)
const routeCost = passengerKm * 0.21;
console.log(routeCost);

//calcolare sconto del 20% per i minorenni
const minorCost = routeCost * 0.20;

//calcolare sconto del 40% per gli over 65.
const over65Cost = routeCost * 0.40;

/*L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo)*/
if (passengerAge <= 18) {
    //se il passeggero è minorenne c'è lo sconto del 20%
    console.log("Sei minorenne, il prezzo del tuo biglietto è", minorCost);
    document.getElementById('price').innerHTML = "Sei minorenne, il prezzo del tuo biglietto è " + minorCost;
} else if (passengerAge >= 65) {
    //se il passeggero è over65 'è lo sconto del 40%
    console.log("Sei un over 65, il prezzo del tuo biglietto è", over65Cost);
    document.getElementById('price').innerHTML = "Sei un over 65, il prezzo del tuo biglietto è " + over65Cost;
} else {
    //altrimenti nessuno sconto
    console.log("il prezzo del tuo biglietto intero è", routeCost);
    document.getElementById('price').innerHTML = "Il prezzo del tuo biglietto intero è " + routeCost;

}

