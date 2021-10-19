# Quick Sort

1. 리스트 가운데서 하나의 원소를 고른다. 이렇게 고른 원소를 피벗이라고 한다.
2. 피벗 앞에는 피벗보다 값이 작은 모든 원소들이 오고, 피벗 뒤에는 피벗보다 값이 큰 모든 원소들이 오도록 피벗을 기준으로 리스트를 둘로 나눈다. 이렇게 리스트를 둘로 나누는 것을 분할이라고 한다. 분할을 마친 뒤에 피벗은 더 이상 움직이지 않는다.
3. 분할된 두 개의 작은 리스트에 대해 재귀(Recursion)적으로 이 과정을 반복한다. 재귀는 리스트의 크기가 0이나 1이 될 때까지 반복된다.

## 기본 알고리즘
```javascript
if(array.length <= 1) { return array }
const pivot = array[0]
const front = array.filter(num => num <= pivot)
const back = array.filter(num => num > pivot)
return solution(front).concat(pivot, solution(back))
```

## 피벗 선택
- 퀵 정렬에서 피벗 위치를 결정하는 방법에는 여러가지 방법이 있다. 기초적인 방법으로는 난수 분할이 사용되는데, 안정성이 떨어진다. 많은 라이브러리에서는 세 값(좌측 끝, 중앙, 우측 끝)의 중위법을 이용하여 분할한다. 이 방법을 사용하면 중앙에서 분할될 가능성이 높아 전체적으로 정렬의 성능이 좋아진다.

## 피벗 선택 알고리즘

