// não permite que o array tenho seus valores alterados
const dadosClientes1: readonly [number, string] = [1, 'Matheus']

// tupla padrão
const dadosClientes2: [number, string, string] = [1, 'Matheus', 'oliveira']
// tornar opcional
const dadosClientes3: [number, string, string?] = [1, 'Matheus']
const dadosClientes4: [number, string, ...string[]] = [1, 'Matheus', 'Nonato']

console.log(dadosClientes1)
console.log(dadosClientes2)
console.log(dadosClientes3)
console.log(dadosClientes4)

// readonly array

const array1: readonly string[] = ['ludson', 'matheus']
const array2: ReadonlyArray<string> = ['ludson', 'matheus']

console.log(array1)
console.log(array2)
