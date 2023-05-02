<h1>Vue 기초문법</h1>

1. CSR(Client Side Rendering) 방식
- 최초 한 장의 HTML을 받아오는 건 동일하지만, server로 부터 받아오는 문서는 빈 html 문서임.
- 각 요청에 대한 대응을 JS를 사용하여 필요한 부분만 다시 렌더링하는 것 : ① 필요한 페이지를 서버에서 AJAX로 요청 ② 서버는 화면을 그리기 위해 필요한 데이터를 JSON 방식으로 전달 ③ JSON 데이터를 JavaScript로 처리,  DOM tree에 반영.(렌더링) → like 즉석떡볶이. 재료를 담아서 주면, 내가 셀프로 끓여야 함!
- 왜 CSR 방식을 사용하는가?
```javascript
    axios.get(
      HOST_URL,
      {
        headers:{
          Authorization: `Token ${key}`
        }
      }
    )
    .then(res => {
      this.todos = res.data
    })
    .catch(err => console.log(err))
```

- ① 모든 HTML 페이지를 서버로부터 받아서 표시하지 않아도 괜찮음. == 클라이언트는 서버간 통신 즉, 트래픽이 감소 == 트래픽이 감소한다? = 응답속도가 빨라진다.
- ② 매번 새 문서를 받아 새로고침하는 것이 아니라 필요한 부부만 고쳐 나가므로 각 요청이 끊김없이 진행.
    - SNS에서 요청을 누를 때마다 첫 페이지로 돌아간다? 불편하다 ⇒ 요청이 자연스럽게 진행이 됨. (UX 향상)
- ③ BE와 FE의 작업 영역을 명확히 분리할 수 있음. → 각자 맡은 역할을 명확히 분리한다. == 협업이 용이
- 만능은 아님 : 첫 구동 시 필요한 데이터가 많으면 많을 수록 최초 작동 시작까지 오랜 시간이 소요됨. 검색 엔진 최적화(SEO, Search Engine Optimization)가 어려움


2. Vue 없이 Vue 기능 구현하기
- ① Vue CDN 가져오기
- ② Vue instance 생성 : Vue instance_1개의 Object. 미리 정해진 속성명을 가진 Object
- ③ `el, data` 설정하기 : data에서는 관리할 속성을 정의
    - el : 어떤 엘리먼트에 대해 적용되는 건지
    - data : vue 앱에서 어떤 데이터를 사용할 것인지
- ④ 선언적 렌더링 `{{}}` : Vue data를 화면에 렌더링
    - 서버에서 사용하기 : F12/ 상단 더보기 `>>` Vue를 통해서 사용가능.
    - Vue devtools에서 data를 변경하면 DOM에 반영이 됨.
- ⑤ input tag에 `v-model` 작성
    - input에 값을 입력하면 Vue data에 반영되고, Vue data는 DOM에 반영됨.
- 일일이 입력해야하는 장고와 달리 한번에 관리 할 수 있음.