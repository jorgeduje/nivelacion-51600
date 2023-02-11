

// Funcion declarada

function llevoParaguas1(){
    
}

// llevoParaguas1()


// Funciones expresadas

const llevoParaguas2 = function (num1){
    return 1 + 2
}

// llevoParaguas2()

const llevoParaguas3 = (n1, n2) => n1 + n2

// llevoParaguas3( 2, 3 )

// ANCHOR ---> operador ternario y operador AND (&&)
// Si llevalo o No, no hace falta

const llevoParaguas = ()=>{

    let clima = "soleado"

    // if( true && true && true){
    //     return "Si llevalo"
    // }

    let condicionFinal = clima === "lluvioso" && "Si llevalo" 

    // return condicionFinal

}

let resultado = llevoParaguas()

console.log(resultado)

// condicion ? "lo verdadero" : "lo falso"


// condicionFi = undefined

// clima === "lluvioso" ? condicionFi = "Si llevalo" : hola()


// console.log( "perro" && "casa" )