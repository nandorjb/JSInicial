// 2 modos de declarar variaveis, Globais ou dentro de uma função

{
     {
         var sera = 'Será?'
         console.log(sera)
     }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)  //Erro fora da função