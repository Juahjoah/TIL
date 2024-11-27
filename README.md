# 🌱Today I Learned(오늘 내가 배운 것)🌱

<h3> 아이디어를 직접 구현하기 위한 개발자가 되기 위한 나의 노력🤞 </h3>

# Commit Convention

- commit을 할 때, `commit message에 대한 약속`이라고 봐도 무방함.
- 차후에 commit message 만으로 어떤 작업을 진행했는지 파악할 수 있도록 커밋 컨벤션 규칙을 미리 정해두기
- 습관을 들일 수 있도록 최대한 노력하자!

### 📌 Commit message 구성

- 크게 [제목, 본문, 꼬리말]로 구성

```
type: Subject → 제목.
 (한 줄 띄어 분리)
body(생략 가능) → 본문
 (한 줄 띄어 분리)
footer(생략 가능) → 꼬리말
```

### 📌 Commit Type

- 기본 구성은 `태그: 제목` 의 형태
- `:(space)제목`으로 `:`뒤에만 space를 넣기
- 추가적인 문맥 정보를 제공하기 위한 목적으로 괄호 안에 적는 것도 가능
  - ex. Feat(navigation)<br>
    <const>Fix(db)

| Type              | 설명                                                                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| feat :            | 새로운 기능 추가                                                                                                                          |
| fix:              | 버그 수정 또는 오타                                                                                                                       |
| refactor:         | 리팩토링                                                                                                                                  |
| docs:             | 문서 수정                                                                                                                                 |
| design:           | CSS 등 사용자 UI 디자인 변경                                                                                                              |
| comment:          | 필요한 주석 추가 및 변경                                                                                                                  |
| style:            | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우                                                                                         |
| Test:             | 테스트(테스트 코드 추가, 수정, 삭제, 비즈니스 로직에 변경이 없는 경우)                                                                    |
| chore:            | 위에 걸리지 않는 기타 변경사항(빌드 스크립트 수정, assets image, 패키지 매니저 구성을 포함한 모든 업데이트, Production Code 변경 없음 등) |
| study:            | 개인공부 관련 commit                                                                                                                      |
| init:             | 프로젝트 초기 생성                                                                                                                        |
| rename:           | 파일 혹은 폴더명 수정하거나 옮기는 경우                                                                                                   |
| remove:           | 파일을 삭제하는 작업만 수행하는 경우                                                                                                      |
| !BREAKING CHANGE: | 커다란 API 변경의 경우                                                                                                                    |
| !HOTFIX:          | 급하게 치명적인 버그를 고쳐야하는 경우                                                                                                    |

<br/>
<br/>

### 📌 Commit Rule

#### 🔖<b>Subject Rule</b>

- 제목은 50글자 이내로 작성
- ~~첫글자는 대문자로 작성~~
- 마침표 및 특수기호는 사용하지 않음
- 영문으로 작성하는 경우, 동사(원형)을 가장 앞에 명령어로 작성
- 과거시제는 사용하지 않음
- `간결하고 요점적(=개조식)`으로 작성

#### 🔖<b>Body Rule</b>

- 72자 이내로 작성
- 최대한 상세히 작성(코드 변경의 이유를 명확히 작성할수록 좋음)
- 어떻게 변경했는지 보다 `무엇을, 왜` 변경했는지 작성

#### 🔖<b>Footer Rule</b>

- 선택사항
- issue tracker ID 명시하고 싶은 경우에 작성
- 유형: #이슈 번호 형식으로 작성
- 여러 개의 이슈번호는 쉼표(,)로 구분한다.
- 이슈 트래커 유형
  - Fixes: 이슈 수정중 (아직 해결되지 않은 경우)
  - Resolves: 이슈를 해결했을 때 사용
  - Ref: 참고할 이슈가 있을 때 사용
  - Related to: 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)

<br/>
<br/>

# 목차


<details> 
<summary> TIL 파일 목차 </summary>



# [JavaScript](/TIL/Algorithm/)

-

# [TypeScript](/TIL/TS/)

-

# [React](/TIL//React/)

-

# [Next.js](/TIL/Next.js/)

-

# [Networking](/TIL/Networking/)

- [TCP와 ~](/TIL/Networking/TCP.md)

# [SQL](/TIL/SQL/)

- NULL

# [Django](/TIL/Django/)

-

# [Algorithm](/TIL/Algorithm/)

-

# [Git](/TIL/GIT/)

-

</details>
