
# React Router

### 1. 라우팅이란?

- 네트워크에서 통신 데이터를 보낼 때 최적의 경로를 선택하는 과정.
- React에서 라우팅은 페이지 이동 기능을 가능하게 함.
- 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것.

<br>

### 2. React Router

- 여러 라우팅 관련 라이브러리 중 가장 널리 사용되는 라이브러리.
- 가장 많이 사용되는 라우터 컴포넌트:
  - **BrowserRouter**: HTML5를 지원하는 브라우저의 주소를 감지.
  - **HashRouter**: 해시 주소를 감지.

<br>

### 3. React Router 사용법

① **설치**  
```bash
npm install react-router-dom
```

② **폴더 구조**
```plaintext
src/pages:
  ├── Layout.js
  ├── Home.js
  ├── Blogs.js
  ├── Contact.js
  ├── NoPage.js
```

③ **예제**
```javascript
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

- `<Route>` 컴포넌트로 특정 경로에 맞는 컴포넌트를 렌더링.
- `path="*"`: 정의되지 않은 URL에 대해 처리하는 역할(예: 404 페이지).

<br>

### 4. URL 파라미터와 쿼리스트링

① **URL 파라미터**
- 경로에 `:`를 사용하여 설정.
- 여러 파라미터는 `/profiles/:username/:fields`와 같이 설정.

```javascript
<Route path="/profiles/:username" element={<Profile />} />
```

<br>

② **쿼리 스트링**
- `?key=value` 형식으로 설정.
- 여러 파라미터는 `/endpoint?param1=value1&param2=value2` 형태로 설정.
- 쿼리 스트링은 **useLocation** 및 **useSearchParams**를 이용해 처리.

**useLocation**
- 현재 페이지의 location 객체 반환.
  - `hash`: 주소의 # 뒤 문자열.
  - `pathname`: 현재 주소의 경로.
  - `search`: `?` 포함 쿼리 스트링 값.
  - `state`: 페이지 이동 시 전달되는 상태 값.
  - `key`: location 객체의 고유 값.

**useSearchParams**
- 쿼리 스트링 값을 조회하거나 수정하는 Hook.
  - 값 조회:
    - `searchParams.get(key)`: 특정 key의 첫 번째 value 반환.
    - `searchParams.getAll(key)`: 특정 key의 모든 value 배열 반환.
  - 값 변경:
    - `searchParams.set(key, value)`: key 값을 새로운 value로 설정.
    - `searchParams.append(key, value)`: 기존 값을 유지하며 새로운 값 추가.

```javascript
const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};
```

- 쿼리 스트링 값을 문자열로 처리해야 하며, 숫자나 불리언은 변환하여 사용해야 함.

