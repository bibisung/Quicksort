export default function quickSort(array, pivot) {
    if(array.length <= 1) { return array }
    const front = array.filter(num => num <= pivot)
    const back = array.filter(num => num > pivot)
    return quickSort(front).concat(pivot, quickSort(back))
}

