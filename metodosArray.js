

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