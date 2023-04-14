# Commit Convention

- commit을 할 때, `commit message에 대한 약속`이라고 봐도 무방함. 
- 차후에 commit message 만으로 어떤 작업을 진행했는지 파악할 수 있도록 커밋 컨벤션 규칙을미리 정해두기
- 습관을 들일 수 있도록 최대한 노력하자!

### Commit message 구성 
  - 크게 [제목, 본문, 꼬리말]로 구성
  ```
  type: Subject → 제목. 
   (한 줄 띄어 분리)
  body(생략 가능) → 본문
   (한 줄 띄어 분리)
  footer(생략 가능) → 꼬리말
  ```


### 📌 Commit Type
- 기본 구성은 `태그: 제목`의 형태
- `:(space)제목`으로 `:`뒤에만 space를 넣기
- 추가적인 문맥 정보를 제공하기 위한 목적으로 괄호 안에 적는 것도 가능
  - ex. Feat(navigation)<br>
 Fix(db)


|Type|설명|
|------|---|
|Feat :|새로운 기능 추가|
|Fix:|버그 수정 또는 오타(typo)|
|Refactor:|리팩토링|
|Docs:|문서 수정|
|Design:|CSS 등 사용자 UI 디자인 변경|
|Comment:|필요한 주석 추가 및 변경|
|Style:|코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우|
|Test:|테스트(테스트 코드 추가, 수정, 삭제, 비즈니스 로직에 변경이 없는 경우)|
|Chore:|위에 걸리지 않는 기타 변경사항(빌드 스크립트 수정, assets image, 패키지 매니저 구성을 포함한 모든 업데이트, Production Code 변경 없음 등)|
|Init:|프로젝트 초기 생성|
|Rename:|파일 혹은 폴더명 수정하거나 옮기는 경우|
|Remove:|파일을 삭제하는 작업만 수행하는 경우|
|!BREAKING CHANGE:|커다란 API 변경의 경우|
|!HOTFIX:|급하게 치명적인 버그를 고쳐야하는 경우|
