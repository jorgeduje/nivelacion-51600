

// MAP - FILTER - FIND - SOME

// ANCHOR ---> MAP  DEVUELVE UN ARRAY DE LA MISMA LONGITUD QUE EL ORIGINAL
let numeros = [ 1, 5, 2 ]

// let numerosMultiplicados = [ ]

// for (let i = 0; i < numeros.length; i++) {

//     numerosMultiplicados.push( numeros[i] * 10 )
    
// }

let numerosMultiplicados = numeros.map( ( elemento, indice )=> elemento * indice  )


console.log( numerosMultiplicados )


// ANCHOR ---> FILTER  DEVUELVE UN ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLAN LA CONDICION

let numeros2 = [ 11, 52, 23, 44 ]

// let numerosFiltrados = []

// for (let i = 0; i < numeros2.length; i++) {

//     if(numeros2[i] > 30){
//         numerosFiltrados.push(numeros2[i])
//     }
    
// }

let numerosFiltrados = numeros2.filter( (elemento)=>  elemento > 30 )
// []
console.log(numerosFiltrados)



let productos = [
    {
        nombre: "celular",
        precio: 100
    },
    {
        nombre: "notebook",
        precio: 250
    },
    {
        nombre: "tablet",
        precio: 180
    }
]

// ANCHOR ---> FIND  DEVUELVE EL PRIMER ELEMENTO ENCONTRADO 

let elementoSeleccionado = productos.find( (elemento)=>  elemento.nombre === "notebook" )

console.log( elementoSeleccionado )


// ANCHOR ---> SOME  DEVUELVE UN BOOLEANO SI ALGUNO DE LOS ELEMENTOS CUMPLE LA CONDICION


let seEncontro = productos.some( (elemento)=>  elemento.precio > 500 )

console.log( seEncontro )
