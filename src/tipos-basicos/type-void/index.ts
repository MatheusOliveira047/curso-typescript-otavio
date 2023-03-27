function semRetorno(...args: string[]): void {
  console.log(args.join(''))
}
const person = {
  nome: 'Ludson',
  sobrenome: 'Oliveira',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  },
}

semRetorno('Luiz', ' otavio')
person.exibirNome()
export {}
