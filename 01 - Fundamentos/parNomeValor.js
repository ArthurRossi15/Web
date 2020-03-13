// Par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec(){
    const saudacao = 'Falaaaa' // Contexto léxico 2
    return saudacao
}

// Objetos sãp grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Top',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)