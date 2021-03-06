//Exercício 1

function inverteArray(array) {
   var arrayInvertida = [];
   for (var  i = array.length - 1; i >= 0; i--) {
      arrayInvertida.push (array[i]);
   }

   return arrayInvertida

}

inverteArray([3, 4, 13, 17, 20, 43])

console.log (inverteArray)

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   var arrayPares = [];
   for (var i=0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         arrayPares.push(array[i] * array[i])
      }
   }

   return arrayPares

}

arrayPares([5, 11, 13, 21])

console.log (arrayPares)


//Exercício 3
function retornaNumerosPares (array) {
   var numeroPar = [];
   for (var i=0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         numeroPar.push(array[i])
   }
}

   return numeroPar
}

numeroPar([2,8,12,22])

console.log (numeroPar)

//Exercício 4

function retornaMaiorNumero(array) {
   var numeroMaior = array[0];
   for (var i=0; i < array.length; i++) {
      if (numeroMaior < array[i]) {
         numeroMaior = array[i]
   }
}
   return numeroMaior  
}

numeroMaior([13, 17, 23, 24, 29])

console.log (numeroMaior)

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

/*
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 //true
const booleano4 = !booleano3 //false

a) false

b) (true && false) || !true 
false || false 
false 

c) false || true && false || true 

d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
!(false && true) || !(true && true)
true 

e) !(true) && !(true) || (!false && true && true)
false && true || true
true  

[false, true, true, false, true] */

function retornaExpressoesBooleanas() {
   return [false, false, true, true, true]
}

//Exercício 7

function retornaNNumerosPares(n) {
   var retornaPares = [];
   for (numero=0; retornaPares.length < n; numero++) {
      if (numero % 2 === 0) {
         retornaPares.push(numero)
   }
}
   return retornaPares  
}


// Exercício 8

function checaTriangulo(a, b, c) {
  if (a === b && c === b) {
  return "Equilátero" 
  } else if (a !== b && c !== b) {
   return "Escaleno" 
  } else {
     return "Isósceles"
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}