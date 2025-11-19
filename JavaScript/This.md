# JavaScript에서 `this` 바인딩 방식 정리

JavaScript의 `this`는 **함수 호출 방식에 따라 동적으로 결정**됩니다.

<br/>

### 1. 전역 호출 (기본 바인딩)

전역 스코프에서 일반 함수를 호출하면 `this`는 전역 객체를 참조합니다.

- 브라우저: `window`
- Node.js: `global`
- strict mode: `undefined`

```js
function globalFunc() {
  console.log(this);
}
globalFunc(); // window / global / undefined(strict mode)
````

<br/>

### 2. 메서드 호출 (암시적 바인딩)

객체의 프로퍼티로 함수를 호출하면 `this`는 그 객체를 가리킵니다.

```js
const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};

obj.greet(); // "Alice"
```

메서드를 변수에 따로 저장해 호출하면 바인딩이 사라집니다.

```js
const fn = obj.greet;
fn(); // this → window/global 또는 undefined(strict)
```
<br/>

### 3. 생성자 함수 / 클래스 (new 바인딩)

생성자 함수나 클래스를 `new`와 함께 호출하면 `this`는 생성되는 인스턴스를 참조합니다.

```js
function Person(name) {
  this.name = name;
}

const p = new Person("Alice");
console.log(p.name); // "Alice"
```

<br/>

### 4. 명시적 바인딩 (call, apply, bind)

`call`, `apply`, `bind`를 사용해 원하는 객체로 `this`를 직접 설정할 수 있습니다.

```js
function greet() {
  console.log(this.name);
}

const user = { name: "Alice" };

greet.call(user);  // "Alice"
greet.apply(user); // "Alice"

const bound = greet.bind(user);
bound(); // "Alice"
```

<br/>

### 5. 화살표 함수 (렉시컬 this)

화살표 함수는 **자신만의 this**를 가지지 않고, **정의된 위치의 this를 그대로 사용**합니다.

```js
const obj = {
  name: "Alice",
  greet: () => console.log(this.name),
};

obj.greet(); // undefined (전역 this)
```

※ 화살표 함수에서는 `call`, `apply`, `bind`로도 `this`를 변경할 수 없습니다.

<br/>

### 6. DOM 이벤트 핸들러

DOM에서 이벤트 핸들러를 **일반 함수**로 등록하면 `this`는 이벤트가 발생한 요소를 가리킵니다.

```js
button.addEventListener("click", function () {
  console.log(this); // 클릭된 button 요소
});
```

화살표 함수는 상위 스코프의 `this`를 사용하므로 DOM 요소를 가리키지 않습니다.

```js
button.addEventListener("click", () => {
  console.log(this); // button 요소 아님
});
```

<br/>

## 추가로 알아두면 좋은 내용

### 7. 이벤트 핸들러에서의 `event.currentTarget`

DOM에서는 `this` 대신 `event.currentTarget`을 사용하는 것이 더 안전합니다.

```js
button.addEventListener("click", (event) => {
  console.log(event.currentTarget); // 항상 button 요소
});
```

<br/>

### 8. strict mode에서의 this

strict mode에서는 기본 바인딩 시 `this`가 `undefined`가 됩니다.

```js
"use strict";
function f() {
  console.log(this); // undefined
}
f();
```

<br/>

### 9. 콜백에서 this가 변경되는 문제

콜백 함수에서는 기본적으로 `this`가 유지되지 않습니다.

```js
const obj = {
  name: "Alice",
  say() {
    setTimeout(function () {
      console.log(this.name); // undefined
    });
  },
};
```

해결 방법:

```js
setTimeout(() => console.log(this.name)); // 상위 스코프의 this 유지
```

또는

```js
setTimeout(function () {
  console.log(this.name);
}.bind(this));
```
