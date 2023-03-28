let x = 10 // eslint-disable-line
x = 0b1010

const y = 10
const a = 100

const person = {
  nome: 'Matheus' as const,
  sobrenome: 'Oliveira',
}
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor
}

console.log(escolhaCor('Azul'))

export {}
