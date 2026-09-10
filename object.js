const prompt = require('prompt-sync')()
let x = Number(prompt("entrer la valeur de x : "))
let y = Number(prompt("entrer la valeur de y : "))
let object = {
    x:x,
    y:y
}
console.log(object.x)
console.log(object.y)

