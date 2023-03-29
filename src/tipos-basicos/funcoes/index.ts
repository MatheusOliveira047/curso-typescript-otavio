type MapStringsCallback = (item: string) => string

function mapString(array: string[], callbackFn: MapStringsCallback): string[] {
  const newArray: string[] = []

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFn(array[i]))
  }

  return newArray
}

const abc = ['a', 'b', 'c']

const abcMapped = mapString(abc, (item) => item.toUpperCase())

console.log(abcMapped)
