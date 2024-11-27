# React Lifecycle

### React Lifecycle이란?

- React 컴포넌트는 생성, 업데이트, 그리고 소멸의 과정을 거치며, 이 모든 단계를 **생명주기(Lifecycle)**라고 부름.
- 각 단계에서 특정 메서드나 Hook을 활용해 컴포넌트의 동작을 제어 가능.
- 주로 다음과 같은 세 가지 단계로 나뉨:
  - **Mounting**: 컴포넌트가 생성되고 DOM에 추가되는 단계.
  - **Updating**: 컴포넌트의 props 또는 state가 변경되어 다시 렌더링되는 단계.
  - **Unmounting**: 컴포넌트가 DOM에서 제거되는 단계.

<br>

# 1. React Lifecycle 제어  

### 1.1 Mount: 컴포넌트가 처음 실행될 때  
- 컴포넌트가 생성되고 초기 렌더링이 이루어지는 단계.
  
#### 1) constructor
- 컴포넌트 생성자 메서드로, 컴포넌트가 생성되면 가장 먼저 실행되는 메서드.
- 주로 state 초기화 및 이벤트 핸들러 바인딩에 사용.
```javascript
constructor(props) {
  super(props);
  this.state = { count: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

#### 2) getDerivedStateFromProps  
- props로부터 파생된 state를 가져오는 메서드.  
- 컴포넌트가 렌더링되기 전, props에서 state를 갱신하고 싶을 때 사용.  
```javascript
static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null;
}
```

#### 3) render  
- 컴포넌트를 렌더링하는 메서드.  
- 반드시 JSX를 반환해야 하며, DOM에 반영되는 부분.  
```javascript
render() {
  return <h1>{this.state.title}</h1>;
}
```

#### 4) componentDidMount  
- 컴포넌트가 마운트되고 나서 호출되는 메서드로, DOM 조작 및 API 호출에 주로 사용.  
```javascript
componentDidMount() {
  fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => this.setState({ data }));
}
```

### 1.2 Updating: 컴포넌트가 업데이트될 때 호출  

#### 1) getDerivedStateFromProps  
- 컴포넌트의 props나 state가 변경되었을 때 호출.

#### 2) shouldComponentUpdate  
- 컴포넌트가 리렌더링할지 말지를 결정하는 메서드로, 성능 최적화에 사용.  
```javascript
shouldComponentUpdate(nextProps, nextState) {
  return nextProps.value !== this.props.value;
}
```

#### 3) componentDidUpdate  
- 컴포넌트가 업데이트된 후 호출되며, DOM 조작 및 추가 작업을 수행.  
```javascript
componentDidUpdate(prevProps, prevState) {
  if (this.state.count !== prevState.count) {
    console.log("Count updated");
  }
}
```

### 1.3 Unmount: 컴포넌트가 화면에서 사라질 때 호출  

#### 1) componentWillUnmount  
- 컴포넌트가 화면에서 사라지기 직전에 호출되는 메서드로, 리소스 정리(예: 타이머 해제) 등에 사용.  
```javascript
componentWillUnmount() {
  clearInterval(this.timerID);
}
```

### 🔍 **주의**  
- 위의 메서드들은 **class형 컴포넌트**에서만 사용할 수 있음.  
<br>

# 2. React Hooks  

### 2.1 Hooks란?  
- `use`라는 키워드를 붙여, class형 컴포넌트에서 사용하는 생명주기 메서드를 함수형 컴포넌트에서도 사용할 수 있도록 제공하는 기능.  
- 주로 사용되는 Hooks: `useState`, `useEffect`, `useRef`, `useContext`, `useReducer`.

### 2.2 주요 Hooks 및 예제  

#### 1) useEffect  
- `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`를 통합한 역할.  
- 화면 렌더링 이후 실행되며, 상태 변경 시에도 호출.  
```javascript
useEffect(() => {
  console.log("Component mounted or updated");
  return () => console.log("Component unmounted"); // Cleanup 함수
}, [dependency]); // dependency가 변경될 때 실행
```

#### 2) useState  
- 함수형 컴포넌트에서 상태를 관리하는 Hook.  
- 상태 값과 상태를 업데이트하는 함수 반환.  
```javascript
const [count, setCount] = useState(0);
const increment = () => setCount(count + 1);
```

#### 3) useContext  
- Context API를 통해 만든 값을 함수형 컴포넌트에서 사용할 수 있게 해주는 Hook.  
```javascript
const ThemeContext = React.createContext("light");
const App = () => {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Hello, World!</div>;
};
```

#### 4) useReducer  
- `useState`의 대체 함수로, 복잡한 상태 로직을 컴포넌트 외부로 분리 가능.  
```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

#### 5) useRef  
- DOM 접근 또는 값의 변화를 추적할 때 사용.  
```javascript
const inputRef = useRef(null);
const focusInput = () => inputRef.current.focus();
```

### 🔍 **Hooks를 사용하는 이유**  
- **class 컴포넌트의 단점**:  
  - 코드 길이 증가.  
  - 중복 코드 및 가독성 문제.  
- Hooks는 간결하고 재사용 가능한 상태 관리 및 생명주기 로직 제공.  
