# CSRF 토큰

## CSRF란 무엇인가?
- CSRF(Cross-Site Request Forgery)는 사용자가 로그인한 상태의 인증 정보를 악용하여, 사용자의 의지와 무관한 요청을 특정 웹 서비스에 보내도록 유도하는 공격 방식  
- 공격자는 피해자의 **세션 쿠키를 활용**하여 계정 변경, 데이터 수정, 삭제 등의 작업을 대신 수행할 수 있음  
- 브라우저의 자동 쿠키 전송 특성을 악용하기 때문에, 추가적인 검증 요소가 필요함  

<br/>
<br/>

## CSRF 토큰(Token)이란?
- 서버가 생성하여 클라이언트로 전달하는 **예측 불가능한 난수 값**  
- 사용자가 보내는 요청이 실제로 **정상 사용자로부터 발생한 요청인지**를 검증하기 위한 값  
- 요청 시 토큰을 포함하여 전송하고, 서버는 이 값이 유효한지 확인  
- 토큰이 없거나 변조되면 서버는 요청을 거부하며 `403 Forbidden` 반환  

### CSRF 토큰의 특징
- 세션 또는 요청마다 생성되는 **고유 값**
- **쿠키와 별도 전송**되므로 공격자가 임의 생성 불가
- Spring Security에서는 자동 생성/삽입/검증 기능 제공  

<br/>
<br/>

## Spring Security에서의 CSRF 토큰 동작 방식
1. 사용자가 CSRF 보호가 적용된 페이지에 접근  
2. Spring Security가 **CSRF 토큰 생성 및 전달**  
  - HTML form의 hidden input에 자동 삽입  
  - 또는 쿠키로 전달하여 JS에서 읽을 수 있도록 설정 가능  
3. 사용자가 요청을 전송할 때 **토큰을 함께 전송**
4. 서버가 토큰 값 검증  
5. 정상 토큰 → 요청 허용  
6. 변조/누락된 토큰 → 403 Forbidden 반환  

> Spring Security는 기본적으로 모든 state-changing 요청(POST, PUT, DELETE 등)에 대해 CSRF 검증을 수행함  

<br/>
<br/>

## CSRF 토큰을 사용하는 이유

### 1️⃣ 인증 쿠키만으로는 사용자의 요청인지 구분할 수 없음  
브라우저는 자동으로 쿠키를 포함해 전송하기 때문에, 악성 사이트도 쿠키를 이용한 요청을 보낼 수 있음.  

### 2️⃣ 토큰 기반 검증을 통해 요청의 출처를 확인  
토큰은 악성 사이트가 모르는 값이므로 요청 위조가 어려움.  

### 3️⃣ 보안성 강화  
CSRF 토큰은 간단하면서도 매우 효과적인 방어 수단이며, Spring Security에서는 기본적으로 활성화되어 있음.

<br/>
<br/>

## 프론트엔드에서 고려해야 할 사항

### 1️⃣ Form 요청 시
Spring Security + Thymeleaf 환경이라면 CSRF 토큰이 자동 삽입됨:

```html
<input type="hidden" name="_csrf" value="generated-token">
```

프론트엔드에서 별도 처리 없이도 정상 동작


### 2️⃣ AJAX / Fetch 요청 시 (SPA에서 중요)

SPA 환경에서는 직접 토큰을 포함해야 함.

- 예시 (Fetch API)
    ```javascript
    const csrfToken = document.querySelector("meta[name='_csrf']").content;

    fetch('/submit', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken
    },
    body: JSON.stringify({ username: "user" })
    });
    ```

- 프론트엔드가 고려해야 하는 점:
  - HTML 메타 태그, 쿠키 등을 통해 CSRF 토큰을 가져와야 함
  - 모든 state-changing 요청에 반드시 토큰 추가
  - 누락하거나 변조하면 서버가 403 리턴



### 3️⃣ 토큰을 조작하거나 콘솔에 출력하면 안 됨

- CSRF 토큰은 민감 정보
- 개발 환경에서만 로그로 확인하고 배포 시 반드시 제거
- 사용자 조작 방지를 위해 hidden 필드나 meta 태그 활용

