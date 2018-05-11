const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('quadro de Honra')
            break
        case 8:
        case 7:
            console.log('parabéns')
            break
        case 6: case 5:
        console.log('atenção')
            break
        case 4: case 3: case 2: case 1:
            console.log('ruim')
            break
        default:
            console.log('nota inválida')


    }

    console.log('Fim!')
}

imprimirResultado(7)