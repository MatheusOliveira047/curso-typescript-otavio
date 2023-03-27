const objetoA: {
  readonly ChaveA: string
  // readonly não permite mudar valor de chave de um objeto
  readonly ChaveB: string
  ChaveC?: string
  [key: string]: unknown
} = {
  ChaveA: 'Valor A',
  ChaveB: 'Valor B',
}

objetoA.ChaveC = 'outro valor'

console.log(objetoA)
