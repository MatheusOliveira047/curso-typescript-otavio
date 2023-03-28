type Idade = number
type Person = {
  age: number
  firstName: string
  lastName: string
  vota?: boolean
  corPreferida?: string
}
type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type CorPreferida = CorRGB | CorCMYK

const pessoa: Person = {
  age: 25,
  firstName: 'Matheus',
  lastName: 'Oliveira',
}

function setCorPreferida(pessoa: Person, cor: CorPreferida): Person {
  return { ...pessoa, corPreferida: cor }
}

console.log(setCorPreferida(pessoa, 'Magenta'))

export {}
