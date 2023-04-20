
<h1> Array Helper Methods </h1>

`map` : `array.map(callback(element[, index[, array]]))` <br>
- 각 배열에 대해서 콜백 함수를 한 번씩 실행하고, 콜백 함수의 반환 값을 요소로 하는 새로운 배열로 반환
- 기존의 배열을 다른 형태로 바꿀 때 유용한 함수
- ex. 기존 배열의 세제곱 수를 구하기

`filter` : `array.filter(callback(element[, index[, array]]))` <br>
- 각 배열에 대해서 콜백 함수를 한 번씩 실행하고, 콜백 함수의 반환 값이 true인 요소들만 모아서 새로운 배열로 반환
- 기존의 배열을 필터링하고 싶을 때 유용한 함수
- ex. 원하는 조건에 맞는 값을 모아 새로운 배열 만들기 -> 장 본 목록 배열에서 과일 종류를 담은 목록만들기

`find` : `array.find(callback(element[, index[, array]]))` <br>
- 각 배열에 대해서 콜백 함수를 한 번씩 실행하고, 콜백 함수의 반환 값이 true면 해당 조건을 만족하는 첫번째 요소를 반환
- 만약, 찾는 값이 배열 안에 없다면 undefined를 반환
- ex. 내가 원하는 사람 이름 찾기

`every`: `array.every(callback(element[, index[, array]]))` <br>
- 배열의 모든 요소가 주어진 판별 함수를 통과하면 true를 반환하고, 하나의 요소라도 통화하지 못하면 false를 반환. 빈 배열은 항상 true로 반환

`some`: `array.some(callback(element[, index[, array]]))` <br>
- 배열의 요소 중 하나라도 주어진 판별 함수를 통과하면 true를 반환하고, 모든 요소가 통과하지 못하면 false가 반환. 빈 배열은 항상 false로 반환
- every보다 좀 더 관대한 메서드!

`reduce`: `array.reduce(callback(acc, element[, index[, array]])[, initialValue])` <br>
- 인자로 주어지는 함수(콜백 함수)를 배열의 각 요소에 대해 한 번씩 실행한 후에 acc에 담아 하나의 값으로 반환
- initialValue는 콜백 함수를 최초로 호출할 때, acc에 담겨 있는 기본 값임. 누적될 값들의 초기값으로, 설정하지 않는 경우 첫번째 요소의 값이 됨.
- 배열을 하나의 값으로 계산하는 동작이 필요할 때 사용하는 메서드이며, map, filter 등 여러 배열 메서드 동작을 대부분 대체할 수 있는 메서드임.
- ex. 배열의 평균, 총합 등의 값을 구하기