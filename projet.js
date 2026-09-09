
const prompt = require('prompt-sync')()
let choix;
while(choix!==0){
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
0. Quitter`)
choix= Number(prompt("entrer votre choix :"))
switch(choix){
    case 1:
        console.log("Afficher les trajet")
        break
        case 2:
          console.log("Acheter un ticket")
        break
         case 3:
console.log("Afficher les tickets")
        break
          case 4:
console.log("Annuler un ticket")
        break
            case 5:
console.log("Rechercher un ticket")
        break
        case 6:
console.log("Filtrer les trajets")
        break
        case 7:
console.log("Trier les trajets")
        break
        case 0:
console.log("Quiter")
        break
        default :
        console.log("entrer un nombre de 0 a 7")
        break
}


}

