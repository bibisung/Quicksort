import quickSort from './quick-sort'
import medianOfThree from './median-of-three'

const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
const pivot = medianOfThree(array, 0, array.length / 2, array.length - 1)

console.log('피벗 선택 하지않음')
console.time('QuickSort Operation took')
console.log(quickSort(array, array[0]))
console.timeEnd('QuickSort Operation took')

console.log('피벗 선택')
console.time('QuickSort Operation took')
console.log(quickSort(array, pivot))
console.timeEnd('QuickSort Operation took')