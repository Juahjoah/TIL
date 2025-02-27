# 자바스크립트 변수 선언 방식의 차이점

자바스크립트는 ES6부터 기존의 `var`에 `let`, `const`가 추가
옛날의 `var`가 최신의 `let`(변수), `const`(상수)로 분리되었다고 생각할 수 있으나, 내부적으로는 차이점이 많습니다.  
(참고: 여전히 `var`도 사용 가능)

---

## 🌟 **var, let, const 차이점 5가지**
1. **중복선언 가능 여부**
2. **재할당 가능 여부**
3. **변수의 스코프(Scope) 유효범위**
4. **변수의 호이스팅(Hoisting) 방식**
5. **전역객체(Global Object) 프로퍼티 여부**

---

## 1. 중복선언 가능 여부

### ✅ **`var` : 중복 선언 가능**

```javascript
// 첫번째 변수 선언 및 초기화 
var a = 10; 
console.log(a); // 10 

// 두번째 변수 선언 및 초기화 
var a = 20; 
console.log(a); // 20

// 세번째 변수 선언 (초기화 X) 
var a; 
console.log(a); // 20
```

- `var`로 선언한 변수는 **중복 선언**이 가능합니다.
- 단, 초기화 없이 선언만 하면 선언문이 무시됩니다. (에러 발생 X)
- 기존 변수의 존재를 까먹고 실수할 가능성이 큽니다.

---

### ❌ **`let`, `const` : 중복 선언 불가능**

```javascript
// let 중복 선언 
let a = 10; 
let a = 20; // ❌ SyntaxError: Identifier 'a' has already been declared 

// const 중복 선언 
const b = 10; 
const b = 20; // ❌ SyntaxError: Identifier 'b' has already been declared
```

- `let`, `const`는 **중복 선언이 불가능**합니다.
- 중복 선언 시 에러를 발생시켜 코드의 안정성을 높입니다.

---

## 2. 재할당 가능 여부

### 🔄 **`var`, `let` : 재할당 가능**

```javascript
var a = 10;
a = 20;
console.log(a); // 20

let b = 30;
b = 40; 
console.log(b); // 40
```

- `var`, `let`은 변수 선언 후 **재할당 가능**합니다.

---

### 🚫 **`const` : 재할당 불가능**

```javascript
const c = 100;
c = 200; // ❌ TypeError: Assignment to constant variable.
```

- `const`는 **상수 선언** 키워드로, 초기화 이후 **재할당 불가능**합니다.
- 초기화 시 반드시 **값을 설정**해야 합니다.

---

## 3. 스코프(Scope)

### 📌 **스코프란?**
변수를 참조할 수 있는 **유효한 범위**를 의미합니다.

- `var` : **함수 레벨 스코프(Function-level Scope)**
- `let`, `const` : **블록 레벨 스코프(Block-level Scope)**

---

### 🟠 **`var` : 함수 레벨 스코프**

```javascript
function hello() { 
  var a = 10; 
  console.log(a); // 10 
} 

hello(); // 10 
console.log(a); // ❌ ReferenceError: a is not defined
```

- `var`은 함수 내부에서만 **지역변수**로 작용하며, 함수 외부에서는 참조할 수 없습니다.
- 그러나 **함수를 제외한 모든 블록(if, for 등)**에서는 **전역변수**로 간주됩니다.

```javascript
if (true) { 
  var a = 10; 
  console.log(a); // 10 
} 
console.log(a); // 10
```

---

### 🟢 **`let`, `const` : 블록 레벨 스코프**

```javascript
if (true) { 
  let a = 10; 
  const b = 20;
  console.log(a); // 10 
  console.log(b); // 20 
} 

console.log(a); // ❌ ReferenceError: a is not defined
console.log(b); // ❌ ReferenceError: b is not defined
```

- `let`, `const`는 함수뿐만 아니라 **모든 블록 내에서 유효한 지역변수**입니다.

---

## 4. 호이스팅 (Hoisting)

### 🚀 **호이스팅이란?**
변수 선언을 **해당 스코프의 최상단으로 끌어올리는 것**을 의미합니다.

- **`var`** : 변수 선언이 최상단으로 올라가며 `undefined`로 초기화됩니다.
- **`let`, `const`** : 변수 선언이 끌어올려지지만 **초기화는 선언부에 도달했을 때 이루어집니다**.  
  따라서 초기화 전에 접근 시 **ReferenceError**를 발생시킵니다.

---

### 🟠 **`var`의 호이스팅 예시**

```javascript
console.log(a); // undefined 
var a = 10; 
console.log(a); // 10
```

- `var`는 선언부만 위로 끌어올리고, 초기화는 원래 자리에 남아있어 **undefined**를 반환합니다.

---

### 🟢 **`let`, `const`의 호이스팅 예시**

```javascript
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

- `let`, `const`는 선언 전 접근 시 **ReferenceError**를 발생시킵니다.

---

## 🔍 **정리**

| 특징                   | `var`                   | `let`                   | `const`                  |
|------------------------|-------------------------|-------------------------|--------------------------|
| **중복 선언**          | ✅ 가능                 | ❌ 불가능               | ❌ 불가능                |
| **재할당**             | ✅ 가능                 | ✅ 가능                 | ❌ 불가능                |
| **스코프**             | 함수 레벨               | 블록 레벨               | 블록 레벨               |
| **호이스팅**           | 선언 및 `undefined` 초기화 | 선언만, 초기화 X        | 선언만, 초기화 X        |
| **전역객체 등록 여부** | ✅ (window.a)           | ❌ (window.a)           | ❌ (window.a)           |

