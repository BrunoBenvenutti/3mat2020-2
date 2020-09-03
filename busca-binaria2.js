// Busca binária só funciona com uma lista preordenada
let comp = 0
function buscaBinaria(lista, valorBusca, fnComp) {
    let inicio = 0
    let fim = lista.length - 1
    
    while(fim >= inicio) {
        // Math.floor() tira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        // Chamar a função externa de comparação para 
        // direcionar os próximos passos
        let res = fnComp(lista[meio], valorBusca)

        if(res === 0) { // Achou 
            comp++
            return meio
        }
        else if(res < 0) {
            // Trazendo o indicador de fim para uma posição
            // antes do meio, assim descartando todos os valores
            // que são maiores que o valor na posição média
            comp += 2
            fim = meio - 1
        }
        else {  // res > 0
            comp += 2
            inicio = meio + 1
        }
    }
    return -1       // O valor não foi encontrado
}

const listaNomes = require('./dados/lista-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(listaNomes, 'FAUSTO', (obj, busca) => {
    if(obj.first_name === busca) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp)

console.log('---------------------------------------')

comp = 0
console.time('ORSELINA')
console.log(buscaBinaria(listaNomes, 'ORSELINA', (obj, busca) => {
    if(obj.first_name === busca) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('ORSELINA')
console.log('Comparações: ', comp)

console.log('---------------------------------------')

comp = 0
console.time('INSTAGRAMILSON')
console.log(buscaBinaria(listaNomes, 'INSTAGRAMILSON', (obj, busca) => {
    if(obj.first_name === busca) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('INSTAGRAMILSON')
console.log('Comparações: ', comp)