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


3. Vue 구현 과정
   

4. Directive : `v-` 문법
- v-접두사가 있는 특수 속성에는 값을 할당할 수 있음. : 값에는 JS 표현식으로 작성할 수 있음.
- directive의 역할은 **표현식의 값이 변경**될 때 **반응적**으로 DOM에 적용하는 것
  
4.1. v-text 

- Template Interpolation과 함께 가장 기본적인 바인딩 방법
- `{{ }}` 와 동일한 역할을 하지만, **정확히 동일한 역할인 것은 아님.**

4.2. v-html

- RAW HTML을 표현할 수 있는 방법
- 단, 사용자가 입력하거나 제공하는 컨텐츠에는 **절대 사용 금지**

4.3. v-show

- 표현식에 작성된 값에 따라 element를 보여줄 것인지 결정
    - boolean 값이 변경될 때마다 반응함.
- 대상 element의 display 속성을 기본 속성과 none 으로 toggle
- 요소 자체는 항상 DOM에 렌더링 됨.
- 바인딩 된 isActive의 값이 false 이므로 첫 방문 시 p tag는 보이지 않음.
    - vue dev tools에서 isActive 변경 시 화면에 출력
    - 값을 false로 변경 시 다시 사라짐
    - 화면에서만 사라졌을 뿐, DOM에는 존재함 : display 속성이 변경되었을 뿐!

4.4. v-if

- v-show와 사용방법은 동일함. isActive의 값이 변경될 때 반응하지만, 값이 false인 경우 DOM에서 사라짐.
- `v-if` `v-else-if` `v-else` 의 형태로 사용함.
- v-show와 v-if의 차이점
    - v-show(Expensive initial load, cheap toggle)
        - 표현식 결과와 관계없이 렌더링 되므로 초기 렌더링에 필요한 비용은 v-if 보다 높을 수 있음.
        - display 속성 변경으로 표현 여부를 판단하므로 렌더링 후 toggle 비용은 적음
    - v-if(Cheap initial load, expensive toggle)
        - 표현식 결과가 false인 경우, 렌더링조차 되지 않으므로 초기 렌더링 비용은 v-show 보다 낮을 수 있음
        - 단, 표현식 값이 자주 변경되는 경우 잦은 재 렌더링으로 비용이 증가할 수 있음.

4.5. v-for

- `for .. in ..` 형식으로 작성함.
- 반복한 데이터 타입에 모두 사용 가능하며, index를 함께 출력하고자 한다면, `(char, index)` 형태로 사용이 가능함.
- 배열 역시 문자열과 동일하게 사용 가능
- 각 요소가 객체라면 `dot notaion (.)` 으로 접근 할 수 있음.
- ❗ 특수 속성 key
    - `"v-for 사용 시 반드시 key 속성을 각 요소에 작성"`
    - 주로 v-for directive 작성 시 사용함
    - vue 화면 구성 시 이전과 달라진 점을 확인하는 용도로 활용함.
        - 따라서, key가 중복되어서는 안됨. (현재는 `index` 를 가장 많이 사용함.
    - 각 요소가 고유한 값을 가지고 있다면 생략할 수 있음.
- 객체 순회 시 value가 할당되어 출력
- 2번째 변수 할당 시 key도 출력 가능

4.6. v-on : 이벤트를 핸들링할 때 사용함. 오직 핸들링 시에만!

- `@` : 앳. 으로 축약해서 사용할 수 있음.(shortcut)
    - ex) @keyup.click
- `:` 을 통해 전달 받은 인자를 확인하고, 값으로 JS 표현식을 작성함
- addEventListener의 첫 번째 인자와 동일한 값으로 구성
- 대기하고 있던 이벤트가 발생하면, 할당된 표현식을 실행함.
- method를 통한 data 조작도 가능하며, method에 인자를 넘기는 방법은 일반 함수를 호출할 때와 동일한 방식
- `:` 을 통해 전달된 인자에 따라 특별한 modifiers(수식어)가 있을 수 있음.
    - ex) v-on:keyup.enter 등
- 추가] v-on:click을 사용해 해당 요소(element)의 DOM 가져오기
    - `<div id="foo" v-on:click="select($event)">...</div>`
        - 줄여쓰기 `<div id="foo" @click="select">...</div>`
    - `event` 자체는 클릭 이벤트이고, 어떤 요소를 클릭했는지 가져오는 것이 `event.currentTarget`(또는 `event.target`)
        
        ```jsx
        export default {
            methods: {
                select: function(event) {
                    const targetId = event.currentTarget.id;
                    console.log(targetId); // returns 'foo'
                }
            }
        }
        ```
        
    - 파라미터가 여러 개인 경우 `<div id="foo" @click="select(bar, $event)">...</div>`
        
        ```jsx
        export default {
            methods: {
                select: function(bar, event) {
                    // use bar...
                    const targetId = event.currentTarget.id;
                    console.log(targetId); // returns 'foo'
                }
            }
        }
        ```
        

4.7. v-bind : 태그에만 사용 가능. 태그 안에 속성을 추가할 때 사용

- 속성이나, 클래스를 지정하고 수정하는 역할을 진행
- 완전히 같다고는 할 수는 없지만, 일종의 `setAttibute` 같은 개념\
- `:` shortcut을 제공
    - ex) `:class` 등
    - v-for 에서 사용하였던 :key는 v-bind의 shortcut을 활용한 것
- HTML 기본 속성에 Vue data를 연결
- class의 경우 다양한 형태로 연결이 가능함.
    - 조건부 바인딩 : `{ ‘class Name’: ‘조건 표현식’ }` , 삼항 연산자도 가능
    - 다중 바인딩 : `['JS 표현식', 'JS 표현식']`
- Vue data의 변화에 반응하여 DOM에 반영하므로 상황에 따라 유동적 할당이 가능함.

4.8. v-model

- input에 넣은 내용이 바로 form 안에 적용됨.
- input에만 쓰는 개념은 아니고, checkbox, radiobtn 등 입력하는 form을 다룰 때는 v-model을 사용함. → 특히 input에 많이 사용됨!
- Vue instance와 DOM의 양방향 바인딩
- Vue data 변경 시 v-model로 연결된 사용자 입력 element에도 적용
    
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="app">
        <h2>1. Input -> Data</h2>
        <h3>{{ myMessage }}</h3>
        <input @input="onInputChange" type="text">
        <hr>
    
        <h2>2. Input <-> Data</h2>
        <h3>{{ myMessage2 }}</h3>
        <input v-model="myMessage2" type="text">
        <hr>
      </div>
    
      <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
      <script>
        const app = new Vue({
          el: '#app',
          data: {
            myMessage: '',
            myMessage2: '',
          },
          methods: {
            onInputChange: function (event) {
              this.myMessage = event.target.value
            },
          }
        })
      </script>
    </body>
    </html>
    ```

