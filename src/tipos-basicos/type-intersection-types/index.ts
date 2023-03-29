type Person = {
  name: string
  age: number
}

type Jobs = {
  work: boolean
  job: string
}

type Pessoa = Person & Jobs

const pessoa: Pessoa = {
  age: 25,
  job: 'Developer',
  name: 'Matheus',
  work: true,
}

export {}
