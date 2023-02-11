
//ANCHOR ---> Desestructuracion de Objetos

let persona = {
    nombre: "Jorge",
    apellido: "Duje",
    edad: 30
}

console.log( persona.nombre )

// LINK ---> ES IMPORTANTE EL NOMBRE PERO NO EL ORDEN
let { edad, apellido, nombre } = persona

console.log(apellido)

// persona.apellido
// persona.edad
// persona.nombre

console.log("#########")
//ANCHOR ---> Desestructuracion de Arrays

let nombres = [ "pepito", "maria", "juancito" ]

// console.log( nombres[0] )
// console.log( nombres[1] )
// console.log( nombres[2] )


// LINK ---> ES IMPORTANTE EL ORDEN PERO NO EL NOMBRE

let [ x, persona1, persona3 ] = nombres

console.log(x)

