// Array<T> - T[]
export function multicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1)
}

export function concatStrings(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor)
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((s) => s.toUpperCase())
}

const Upp = toUpperCase('a', 'b', 'c')

const result = multicaArgs(10, 20, 20, 30)

const strings = concatStrings('ludson ', 'matheus ', 'oliveira ', 'nonato ')

console.log(result)
console.log(strings)
console.log(Upp)
