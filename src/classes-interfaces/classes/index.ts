export class Empresa {
  readonly nome: string
  private readonly coloboradores: Colaborador[] = []
  private readonly teste: string
  protected readonly CNPJ: string

  constructor(nome: string, cnpj: string, teste: string) {
    this.nome = nome
    this.CNPJ = cnpj
    this.teste = teste
  }

  addColaborador(colaborador: Colaborador): void {
    this.coloboradores.push(colaborador)
  }

  mostrarColaboradores(): void {
    this.coloboradores.forEach((col) => {
      console.log(col)
    })
  }

  upperCase(): void {
    this.teste.toUpperCase()
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
}

const empresa1 = new Empresa('Matt-Code', '0445.55544.5556', 'tttt')
const colaborador1 = new Colaborador('Luudson', 'Matheus')
const colaborador2 = new Colaborador('Oliveira', 'Nonato')
empresa1.addColaborador(colaborador1)
empresa1.addColaborador(colaborador2)
empresa1.mostrarColaboradores()
empresa1.upperCase()
console.log(empresa1)
