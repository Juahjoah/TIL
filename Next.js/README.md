# Next.js

## Next.js에서 사용하는 2가지 방식의 Pre-Rendering

### 1. Static Site Generation (SSG)

html을 빌드 타임에 생성하고, 각 요청에 따라 재사용한다.
Next.js 내부에 존재하는 Pre-Render 메서드가 최초에 html 을 build 할 때 동작한다.

그리고 Pre-Render 된 html 파일은 요청에 따라 재사용된다.

- 기본적으로 Next.js 공식홈페이지에서 추천하는 방식이다.

### 2. Server Side Rendering(SSR)

html 을 각 리퀘스트가 일어날 때 마다 생성한다.
주로 사용자마다 페이지의 데이터가 다르게 보여야 하는 페이지에서 사용된다.

- 매 요청마다 data가 자주 업데이트 되는 경우 SSR 을 선택하면 된다.
