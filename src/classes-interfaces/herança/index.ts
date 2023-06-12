export class Pessoa {
  constructor(
    public name: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade
  }

  getCPF(): string {
    return this.cpf
  }

  getNomeCompleto(): string {
    return `${this.name} ${this.sobrenome}`
  }
}

export class Aluno extends Pessoa {}
export class Cliente extends Pessoa {}

const aluno1 = new Aluno('Ludson', 'Matheus', 24, '0455455455')
const pessoa1 = new Pessoa('Ludson', 'Matheus', 24, '0455455455')
const cliente1 = new Cliente('Ludson', 'Matheus', 24, '0455455455')

console.log(aluno1, pessoa1, cliente1)
