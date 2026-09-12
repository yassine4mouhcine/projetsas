
const prompt = require('prompt-sync')()
const tickets =[]
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }]
let count = 0
function affiche() {
    console.log("=== TRAJETS DISPONIBLES ===")
    for(let i=0; i< trips.length;i++){
        console.log(`#${trips[i].id} ${trips[i].departure}--> ${trips[i].destination}
          Depart: ${trips[i].departureTime}  
          arrive: ${trips[i].arrivalTime}
          prix :${trips[i].price}DH
          places disponibles :${trips[i].availableSeats}`)
    }
    }

function Acheter() {
    console.log("Acheter un ticket")
    let nome = prompt("Nom du passager : ")
    let idt= Number(prompt("Identifiant du trajet : "))
    let trip
    let ticket
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === idt) {
            trip = trips[i]
            
        }}
    
    if (trip === undefined) {
        console.log("Trajet introuvable")
    }
    else if (trip.availableSeats === 0) {
        console.log("train complet")
    }
    else {
        
        count++
        ticket = {
            id: count,
            passengerName: nome,
            IdTrip: idt,
            seatNumber: 51 - trip.availableSeats ,
            price: trip.price
        }
        tickets.push(ticket)
        trip.availableSeats--
        console.log("Ticket acheté avec succès")

        console.log(`Ticket#${ticket.id}
        Passager :${ticket.passengerName}
        Trajet : ${trip.departure} → ${trip.destination}
        Place : ${ticket.seatNumber}
        Prix : ${ticket.price} DH`)}
    }
        
        
        
        
function afficheticket(){
console.log(`=== TICKETS ===`)
if(tickets.length===0){
    console.log("Aucun ticket enregistré.")
}
else{
    for(let i=0;i<tickets.length;i++){
        for (let j=0;j<trips.length;j++)//trip li lan gh ticket 
        {
           if(trips[j].id===tickets[i].IdTrip) 
            {
            var depart =trips[j].departure// 3la 9bl scope
            var  dest = trips[j].destination
           }
        }
console.log(`Ticket#${tickets[i].id}
    passager :${tickets[i].passengerName}
    trajet : ${depart} →${dest}
    place : ${tickets[i].seatNumber}
    Prix : ${tickets[i].price}DH`)
    }
}
}
function annuler(){
let idt= Number(prompt("entrer Identifiant du ticket :"))//bax n9arno bih 
let ticket 
let trip
let index
for(let i=0;i<tickets.length;i++){
    if(tickets[i].id===idt){
        ticket =tickets[i]
        index = i
    }
    
    
}
if(ticket===undefined){
        console.log("Ticket introuvable")
    }
else{
    for(let i=0;i<trips.length;i++){
    if(trips[i].id===ticket.id){
       trip=trips[i]
        tickets.splice(index, 1);

        trips[i].availableSeats++

        console.log("Ticket annulé avec succès!!!!!");
    }
}
}





}
function rechercherparnom(){
let nom = prompt("entrer un nom pour le rechercher : ")
let check=false
for(let i=0;i<tickets.length;i++){
    if(tickets[i].passengerName.toLowerCase()===nom.toLowerCase()){
        console.log(`ticket#${tickets[i].id}
            Passager:${tickets[i].passengerName.toLowerCase()}
            trajet : ${trips[i].departure}-->${trips[i].destination} 
            place : ${tickets[i].seatNumber}
            prix : ${tickets[i].price}DH
            
            `)
        check=true
    }  
}
if(check===false){
        console.log("il na aucun ticket avec cette nom")
    }
}
function filtrer(){
let ville = prompt("Ville de départ : ")
for(let i=0;i<trips.length;i++){
    if(trips[i].departure.toLowerCase()===ville.toLowerCase()){
        console.log(`${trips[i].departure}→${trips[i].destination} : ${trips[i].price}DH` )
    }
}}
function trie(){
let temp
for(let i=0;i<trips.length;i++){
    for(let j=i+1;j<trips.length;j++){
        if(trips[i].price>trips[j].price){
            temp=trips[i]
            trips[i]=trips[j]
            trips[j]=temp
        }
        
    }
    console.log(`${trips[i].departure} → ${trips[i].destination} : ${trips[i].price}DH`)
}
}
function statistique(){
    let compteur=0
for(let i=0;i<tickets.length;i++){
  compteur++
}
console.log(`Nombre total de tickets : ${compteur}`)


let somme=0
for(let i=0;i<tickets.length;i++){
   somme+=tickets[i].price
}
console.log("Chiffre d'affaires total :",+somme,"DH")

let min =tickets[0].availableSeats
let index 
let def=50
for(let i=1;i<tickets.length;i++){
    if(min>tickets[i].availableSeats){
min=tickets[i].availableSeats
index=i
def-=min
    }
}








console.log(`Trajet le plus vendu :


${tickets[i].departure} → ${tickets[i].destination}

${def}tickets vendus`)





}


let choix;
while (choix !== 0) {
    console.log(`=================================

        RAILWAY MANAGER

=================================

1.Afficher les trajet
2. Acheter un ticket
3. Afficher les tickets
4. Annuler un ticket
5. Rechercher un ticket
6. Filtrer les trajets
7. Trier les trajets
8.statistique/bonus
0. Quitter`)
    choix = Number(prompt("entrer votre choix :"))
    switch (choix) {
        case 1:
            affiche();
            break
        case 2:
            Acheter()
            break
        case 3:
            afficheticket()
            break
        case 4:
            annuler()
            break
        case 5:
            rechercherparnom()
            break
        case 6:
            filtrer()
            break
        case 7:
            trie()
            break
        case 8:
            statistique()
            break
        case 0:
            console.log("Quiter")
            break
        default:
            console.log("entrer un nombre de 0 a 7")
            break
    }


}

