# README Driven Development (RDD)
<!-- 참고 : https://news.hada.io/topic?id=15502 -->

## 개요
- README 주도 개발(RDD)은 소프트웨어 개발 시 README 파일을 가장 먼저 작성하는 방식을 의미함. 
- TDD, BDD, Extreme Programming, SCRUM 등 다양한 개발 방법론이 존재하지만, 소프트웨어가 사용자의 요구를 충족하지 못하면 모든 노력이 헛됨. 완벽하게 구현된 소프트웨어라도 잘못된 명세를 따른다면 가치가 없으며, 문서화되지 않은 훌륭한 라이브러리도 무용지물임. 소프트웨어가 잘못된 문제를 해결하거나 사용 방법을 모른다면 심각한 문제가 발생할 수 있음.

<br>
<br>

## 해결책: README 우선 작성
### README를 먼저 작성하는 이유
- 코드, 테스트, 사용자 스토리 등을 작성하기 전에 README를 먼저 작성하는 것이 필수적임.
- README 작성은 견고한 소프트웨어를 개발하기 위한 중요한 단계임.
- README 작성 전까지는 무엇을 코딩해야 할지 명확하지 않을 수 있음.
- README는 프로젝트를 체계적으로 계획하고 정리하는 데 도움을 줌.

## README 우선 작성의 장점
### 체계적인 프로젝트 계획
- 코드를 수정할 필요 없이 프로젝트를 체계적으로 구상 가능.
- 코딩 이전에 프로젝트의 구조와 포함될 API를 깊이 있게 고민 가능.

### 고품질 문서 확보
- 프로젝트 초기에 높은 열정과 동기부여를 가지고 문서 작성 가능.
- 나중에 README를 작성하는 것은 지루할 수 있으며 중요한 세부 사항을 놓칠 위험이 있음.

### 명확한 요구 사항 정의
- README에 기능 요구 사항을 명확히 기록함으로써 개발 과정에서 방향성을 잃지 않도록 방지함.
- 모든 팀원이 동일한 목표를 공유하게 되어 프로젝트 진행이 원활해짐.
- 텍스트로 제안된 해결책을 작성하는 간단한 행위로 모두가 명확한 아이디어를 가지고 논의 가능.

### 팀 협업 효율성 증가
- 팀의 다른 개발자들이 프로젝트 완료 전에 인터페이스에 대한 정보를 공유받아 각자의 작업을 자신 있게 시작 가능.
- 명확한 인터페이스 없이 작업하면 대규모 코드 수정이 필요할 수 있음.

### 사용자 중심 개발
- README를 먼저 작성함으로써 최종 사용자의 관점을 고려한 개발 가능.
- 소프트웨어가 실제 사용자 요구를 충족하는지 확인하는 데 도움이 됨.

### 테스트 케이스 작성 용이
- README에 기재된 사용 사례를 바탕으로 테스트 케이스를 쉽게 작성 가능.
- 초기 단계에서 예상되는 문제를 발견하고 해결할 수 있음.

<br>
<br>

## README 주도 개발(RDD)의 특징
- RDD는 Documentation Driven Development(DDD)의 하위 집합이거나 제한된 버전으로 볼 수 있음.
- RDD는 단일 파일로 설계 문서를 제한하여 과도한 사양 작성의 문제를 방지함.
- 작은 모듈화된 라이브러리를 유지하도록 유도함.

<br>
<br>


## 결론
- README를 작성하는 과정을 진정한 "창작 행위"로 생각해야 함. 이 문서에 모든 기발한 아이디어가 담겨야 하며, 문서 자체가 창의성과 표현력을 증명하는 증거가 되어야 함.
- README는 코드베이스에서 가장 중요한 문서이며, 제일 먼저 작성하는 것이 올바른 접근 방식임. 이 접근 방식은 소프트웨어 개발의 효율성과 품질을 높이는 데 기여할 것임.