const objetoA: {
  readonly ChaveA: string
  // readonly não permite mudar valor de chave de um objeto
  readonly ChaveB: string

  // sinal de ? permite que o ser opcional declarar a chave do objeto
  ChaveC?: string

  //permite que seja declado uma chave tipo string de qualquer valor
  [key: string]: unknown
} = {
  ChaveA: 'Valor A',
  ChaveB: 'Valor B',
}

objetoA.ChaveC = 'outro valor'

console.log(objetoA)
