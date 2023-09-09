# React

### 1. React 구조 파악

- `create-react-app` 구조 파악 - `node_modules`: 프로젝트를 구성하는 모든 패키지 소스가 존재하는 폴더 - `package.json`: 기본 패키지 외 추가로 설치된 라이브러리/패키지 정보(종류, 버전)가 기록되는 파일 ➡ 모든 프로젝트에 하나씩 필수 존재
  <br>

          ```❓❓ 근데 왜 node.modules과 package.json에서 이중으로 패키지를 관리하는 걸까??
          - 실제 내가 작성한 코드, 내가 설치한 패키지는 내 로컬에만 존재
          - github에 올릴 때 내가 작성한 코드와 함께 pacakge.json(추가로 설치한 패키지)를 넘김
          - 다른 사람이 그것을 (pull) 받아서 npm install만 입력하면 package.json에 기록되어 있는 패키지의 이름과 버전 정보를 확인하여 자동으로 설치
          - 이 때, github에 올릴 때, node.modules는 올리면 안되는데 (불필요한 용량 차지),
          - .gitignore 파일에 github에 올리고 싶지 않은 폴더와 파일을 작성 가능
          ```
      - `.gitignore`: github에 올리고 싶지 않은 파일 및 폴더 작성
      - `package-lock.json`: npm이 알아서 관리해주는 파일들로 lock 파일은 해당 프로젝트에 설치한 패키지, 그 패키지와 관련된 모든 패키지의 버전 정보를 포함
      - `src`: `index.js`를 포함하여, React의 시작이라고 불림.
      - `App.js`: 현재 화면에 보여지고 있는 초기 컴포넌트로 React Router를 설치하면, 컴포넌트가 최상위 컴포넌트로 App.js 자리에 위치

  <br>

### 2. React Component의 구조

- 리액트로 화면을 구성하는 경우, 화면은 사용자가 볼 수 있는 여러 가지 컴포넌트로 구성
- 리액트로 만들어진 앱을 이루는 최소한의 단위
- 사용자에게 보여지는 UI 요소를 컴포넌트 단위로 구분하여 구현 가능
- 컴포넌트는 재사용이 가능하고, 쉽게 새로운 컴포넌트 생성 가능
- 데이터(props)를 입력받아 View(state) 상태에 따라 DOM Node를 출력하는 함수

① 컴포넌트의 종류

- 컴포넌트는 크게 함수형 컴포넌트와 클래스형 컴포넌트로 구분

  - 함수형 컴포넌트는 `function`으로 정의하고, `return`문에 JSX 코드를 반환, 화살표(애로우) 함수로도 정의 가능
    <br>

    ```javascript
    import React from "react";
    import "./App.css";

    function NameBox() {
      const name = "test";
      return <div>{name}</div>;
    }

    export default NameBox;
    ```

  - 클래스형 컴포넌트는 `class`로 정의하고, `render()`함수에서 JSX 코드 반환
    <br>

    ```javascript
    import React, { Component } from "react";

    class NameBox extends Component {
      render() {
        const name = "react";
        return <div className="react">{name}</div>;
      }
    }

    export default NameBox;
    ```

  - 클래스형 컴포넌트에서는 state를 사용할 수 있으며, 각종 라이프 사이클 및 메서드를 이용, 컴포넌트가 마운트 혹은 언마운트 될 때까지 추가 작업을 수행시키는 등 조작 가능
  - 프로퍼티, state, 생명주기 함수가 필요한 구조의 컴포넌트를 만들 때 사용

<br>

② props(프로퍼티, properties)

- 컴포넌트의 재사용을 가능하게 하는 특징
- 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용(단방향 흐름)
- 자식 입장에서 봤을 때, 읽기 전용, 수정할 수 없는 데이터
- “props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환

- 프로퍼티에 문자열을 전달할 때는 큰따옴표(" ")를, 문자열 외의 값을 전달할 때는 중괄호({ })를 사용
- 프로퍼티의 자료형을 미리 선언
  - 리액트에서 제공하는 prop-types를 이용하여 각각의 자료형을 선언
- children을 사용하여 내부에 있는 내용을 표현할 수 있음.

<br>

③ State

- 일반적으로 컴포넌트의 내부에서 변경 가능한 데이터를 관리해야할 때에 사용
- 컴포넌트 내부에서 값을 바꿀 수 없는 프로퍼티의 값을 바꿀 때 사용
- 값을 저장하거나 변경할 수 있는 객체로 보통 이벤트와 함께 사용
- 컴포넌트에서 동적인 값을 상태(state)라고 부르며, 동적인 데이터를 다룰 때 사용
- react 모듈에서 { useState }를 불러오고 useState()를 선언해서 사용 ➡ useState의 변수값이 바뀌면 컴포넌트가 새롭게 렌더링
  ```javascript
  const [state, setState] = useState(initialState);
  const [데이터, 데이터변경함수] = useState(초기값(생략가능));
  ```
  <br>

### 3. React Vite

-
