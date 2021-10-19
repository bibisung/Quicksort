export default function(array, front, middle, rear) {
    let temp = [array[front], array[middle], array[rear]]
    if (temp[0] > temp[1]) {swap(temp, 0, 1)}
    if (temp[1] > temp[2]) {swap(temp, 1, 2)}
    if (temp[0] > temp[2]) {swap(temp, 0, 2)}
    return temp[1]
}
function swap(array, a, b) {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
}