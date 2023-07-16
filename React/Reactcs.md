# React 관련 CS

1. React와 React-Native의 차이
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