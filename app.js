import quickSort from './quick-sort'

const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
console.log(`Origin: ${array}`)

console.time('QuickSort Operation took')
console.log(`Sorted: ${quickSort(array)}`)
console.timeEnd('QuickSort Operation took')