const nome = 'Fernando'
const concatenacao = 'olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// colocar espressoes no template string

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
