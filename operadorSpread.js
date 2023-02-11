
// ANCHOR ---> SPREAD OPERATOR
// ANCHOR ---> COPIA POR VALOR VS COPIA POR REFERENCIA

let a = 5
let b = a


a = a + 2

console.log( a )
console.log(b)


let persona = {
    nombre: "Jorge",
    apellido: "Duje",
    edad: 30
}


let nuevaPersona = {...persona} // != persona

persona.nombre = "pepito"

console.log(persona.nombre)
console.log(nuevaPersona.nombre)


let numeros = [ 12, 43, 5 ]

let numerosNuevos = [...numeros]

numeros.push( 100 )

console.log(numeros)
console.log(numerosNuevos)

