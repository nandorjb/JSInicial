// par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Fernando',
    idade: 38,
    Peso: 83,
    endereco: {
        Logradoro: 'Rua Poços de Caldas',
        Número: 248,

    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
