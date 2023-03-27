/* eslint-disable  */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Ludson'
let idade: number = 24
let aduto: boolean = true
let simbolo: symbol = Symbol('qualquer-symbol')
//let big: bigint = 10n

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8]
let notas: number[] = [1, 2, 3, 4, 5]

let arrayDeStrings: Array<string> = ['Ludson', 'Matheus']
let pessoas: string[] = ['Ludson', 'Matheus']

let aleatorio: any[] = [1, '1', true]

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 24,
  nome: 'Ludson',
  adulto: true,
}

// Funções
function soma(x: number, y: number): number {
  return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y
