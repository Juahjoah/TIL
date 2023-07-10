# React

1. React 구조 파악
- `create-react-app` 구조 파악
    - `node_modules`: 프로젝트를 구성하는 모든 패키지 소스가 존재하는 폴더
    - `package.json`: 기본 패키지 외 추가로 설치된 라이브러리/패키지 정보(종류, 버전)가 기록되는 파일 ➡ 모든 프로젝트에 하나씩 필수 존재 
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