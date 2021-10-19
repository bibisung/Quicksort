export default function(array) {
    if(array.length <= 1) { return array }
    const pivot = array[0]
    const front = array.filter(num => num <= pivot)
    const back = array.filter(num => num > pivot)
    return solution(front).concat(pivot, solution(back))
}

