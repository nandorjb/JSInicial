let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')

console.log('Os Falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)

let nome = 'Fernando'
console.log(nome || 'Desconhecido')