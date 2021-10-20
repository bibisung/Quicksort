export default function quickSort(array) {
    if(array.length <= 1) { return array }
    const pivot = array[Math.floor(Math.random() * array.length)];
    const front = array.filter(num => num < pivot)
    const back = array.filter(num => num > pivot)
    return quickSort(front).concat(pivot, quickSort(back))
}
