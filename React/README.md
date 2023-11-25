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

### 3. React와 React-Native의 차이

- 아이디어 회의 중 어플리케이션 관련 내용이 나와 React-Native의 필요성에 대한 부분을 논의
- 기본적으로 JavaScript라는 언어를 사용하고, 비슷한 문법 구조를 가진다는 점은 공통적

  - 컴포넌트 기반으로 개발하는 점, JSX 문법을 사용하는 점에 있어 매우 비슷
  - Hook 사용법도 거의 동일
  - 사실 React의 방식으로 네이티브 앱을 만들기 위해 React Native가 등장했기 때문에 둘은 개발 형태가 비슷할 수밖에 없음.

- 동작하는 내용이 다르기 때문에 차이점 존재
  | |React|React Native|
  |----|----|----|
  |UI 렌더링|브라우저|iOS, AOS|
  |DOM 조작|필요|필요하지 않음|
  |CSS 스타일링|CSS, Sass 등|Flexbox, StyleShe|
  |모바일 하드웨어 접근|불가능|가능|
  |라이브러리|React DOM, React Router 등|React Native, Expo 등|

① UI 렌더링: React는 웹이기 때문에 브라우저에서 동작하는 반면, React Native는 iOS와 AOS 같은 모바일 환경에 맞춰 동작

② DOM 조작: React는 DOM을 조작하는 방식으로 UI를 업데이트하는 반면, React Native는 DOM 조작을 하지 않고, Javascript와 네이티브 모듈을 사용하여 네이티브 UI 구성 요소를 조작

③ CSS 스타일링: React Native는 웹은 아니기 때문에 CSS 스타일을 사용하지 않고, Flexbox나 StyleSheet를 사용

④ 모바일 하드웨어 접근: React Native는 네이티브이기 때문에 디바이스에 있는 다양한 하드웨어에 API만 있다면 모두 제공

⑤ 라이브러리: React는 주로 React DOM과 React Router, Redux와 같은 라이브러리를 사용하지만, React Native는 React Native, Expo, React Navigation을 사용

- 추가로 React Native는 HTML 문법을 사용하지 않고, Components를 사용
- 호환성 이슈가 존재하고, 앱을 만드는 것이 아니라 네이티브 앱처럼 보이는 앱을 작성해야 하기 때문에 iOS/Android 개발자가 수년간 사용해 온 것과 동일한 UI 가이드라인과 디자인 표준을 사용
