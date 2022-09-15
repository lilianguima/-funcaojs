/*Crie uma um programa de saúde, 
nesse programa desenvolva uma função que calcula o imc de pacientes (peso/altura (2)) 
a função deverá receber os  seguintes parâmetros: peso e altura */

const prompt = require ('prompt-sync')()
const imc = require('./imc')

const peso = prompt('Digite seu peso: ')
const altura = prompt('Digite sua altura: ')

const Resultado = imc(peso,altura)
    console.log(`Seu imc é: ${Resultado}`)

