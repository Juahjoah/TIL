1. SQL Commands

🔖 DDL (Data Definition Language) 정의
- 데이터 정의 언어 : 관계형 데이터베이스 구조(테이블, 스키마)를 정의(생성, 수정 및 삭제)하기 위한 명령어
- CREATE, DROP, ALTER

🔖 DML (Data Manipulation Language) 조작
- 데이터를 조작(추가, 조회, 변경, 삭제)하기 위한 명령어
- INSERT, SELECT, UPDATE, DELETE

🔖 DCL (Data Control Language) 제어
- Django에서 진행하는 SQLite는 파일로 관리되는 DB이기 때문에 DCL 사용 불가. 접근 제한이 아닌 운영 체제의 파일 접근 권한으로만 제어가 가능.

1.2. SQL Syntax
`SELECT column_name FROM table_name;`

- 모든 SQL문(statement)는 SELECT, INSERT, UPDATE 등과 같은 키워드로 시작하고, 하나의 statement는 세미콜론(;)으로 종료됨.
- 키워드는 대소문자를 구분하지 않으나, 대문자로 작성하는 것을 권장함.

1.2.1. DDL (Data Definition Language)

1.2.1.1 CREATE TABLE : 데이터베이스에 새 테이블을 만드는 과정
- ① 테이블 작성하기
    
    ```sql
    CREATE TABLE table_name(
      column_1 data_type constraints,
      column_2 data_type constraints,
      column_3 data_type constraints,
    );
    ```
    
- ② Query 실행하기 : 실행하고자 하는 명령문에 커서를 두고 마우스 우측 버튼 → ‘Run Selected Query’ 선택
    - 명령문을 모두 선택할 필요는 없으며, 실행하고자하는 명령문 안에 커서가 올라가 있으면 가능
- ③ 쿼리 실행 후 테이블 및 스키마 확인
- 테이블 만들기
    
    ```sql
    CREATE TABLE contacts(
      name TEXT NOT NULL,
      age INTEGER NOT NULL,
      email TEXT NOT NULL UNIQUE
    );
    ```
    

1.2.1.2. Data Types 종류

- NULL : 정보가 없거나 알 수 없음을 의미(missing inforamtion or unknown)
- INTERGER : 정수
- REAL : 실수, 8바이트 부동 소수점을 사용하는 10진수 값이 있는 실수
- TEXT : 문자 데이터
- BLOB(Binary Large Object) : 입력된 그대로 저장된 데이터 덩어리(대용 타입 없음), 바이너리 등 멀티미디어 파일
- SQLite는 별도의 Boolean 타입이 없고, 대신 정수 0(f)과 1(T)로 저장
- 참고] SQLite은 날짜 및 시간을 저장하기 위한 타입이 없음.
- 참고] Binary Data : 데이터의 저장, 처리를 목적으로 0과 1의 이진 형식의 인코딩 파일

1.2.1.3. Type Affinity

- 타입 선호도 : 특정 컬럼에 저장된 데이터에 권장되는 타입, 다른 데이터베이스 엔진 간의 호환성을 최대화 함.
- INTEGER, TEXT, BLOB, REAL, NUMERIC
- 타입 선호도 존재 이유 : 다른 데이터 베이스 엔진 간의 호환성을 극대화함. 정적이고 엄격한 타입을 사용하는 데이터베이스의 SQL문을 SQLite 에서도 작동하도록 하기 위함.

1.2.1.3. Constraints : 제약 조건. 

- 입력하는 자료에 대해 제약을 정함. 제약에 맞지 않다면, 입력이 거부됨. 사용자가 원하는 조건의 데이터만 유지하기 위한 즉, 데이터의 무결성을 유지하기 위한 보편적인 방법으로 테이블의 특정 컬럼에 설정하는 제약임.
- 데이터 무결성 : 데이터 베이스 내의 데이터에 대한 정확성, 일관성을 보장하기 위한 데이터 변경 혹은 수정 시 여러 제한을 두어 데이터의 정확성 보증
    - 무결성이란 데이터의 정확성, 일관성을 나타냄.
    - DB에 저장된 데이터의 무결성을 보장하고, 데이터 베이스의 상태를 일관되게 유지하는 것이 목적.

1.2.1.3.1. Constraints 종류 :

- NOT NULL : 컬럼이 NULL 값을 허용하지 않도록 지정. 기본적으로 테이블의 모든 컬럼은 NOT NULL 제약 조건을 명시적으로 사용하는 경우를 제외하고는 NULL 값을 허용
- UNIQUE : 컬럼의 모든 값이 서로 구별되거나 고유한 값이 되도록 함
- PRIMARY KEY : 테이블에서 행의 고유성을 식별하는데 사용되는 컬럼임. 각 테이블에는 하나의 기본 키만 존재함. 암시적으로 NOT NULL 제약 조건을 포함하고 있음. ❗ INTEGER 타입에만 사용 가능
- AUTOINCREMENT : 사용되지 않은 값이나 이전에 삭제된 행의 값을 재사용하는 것을 방지. INTEGER PRIMARY KEY 다음에 작성하면 해당 rowid를 다시 재사용하지 못하도록 함. Django에서 테이블 생성 시 id칼럼에 기본적으로 사용하는 제약조건
- 기타 Constraints

- rowid의 특징 : `SELECT rowid, first_name FROM users;`
    - 테이블을 생성할 때마다 rowid라는 암시적 자동 증가 컬럼이 자동 생성. sql 내부에서 쓰는 변수라고 생각하기
    - 테이블의 행을 고유하게 식별하는 64비트 부호 있는 정수 값
    - 테이블에 새 행을 삽입할 때마다 정수 값을 자동으로 할당함.
        - 값은 1에서 시작
        - 데이터 삽입 시에 rowid 또는 INTEGER PRIMARY KEY 컬럼에 명시적으로 값이 지정되지 않은 경우, SQLite는 테이블에서 가장 큰 rowid보다 하나 큰 다음 순차 정수를 자동으로 할당함.(AUTOINCREMENT와 관계없이)
    - 만약 INTEGER PRIMARY KEY 키워드를 가진 컬럼을 직접 만들면 이 컬럼은 rowid 컬럼의 별칭(alias)가 됨. = 새 컬럼 이름으로 rowid에 엑세스 할 수 있으며, rowid 이름으로도 여전히 엑세스 가능
    - 데이터가 최대 값에 도달하고 새 행을 삽입하려고 하면 SQLite는 사용되지 않은 정수를 찾아 사용
    - 만약, SQLite 사용되지 않은 정수를 찾을 수 없으면, SQLITE_FULL 에러가 발생 → 또한, 일부 행을 삭제하고 새 행을 삽입하면, SQLite는 삭제된 행에서 rowid 값을 재사용하려고 시도

1.2.1.4. ALTER TABLE : 기존 테이블의 구조를 수정(변경)

- Rename a table : 테이블명 변경
    
    `ALTER TABLE contacts RENAME TO new_contacs;`
    
- Rename a column : 컬럼명 변경
    
    `ALTER TABLE table_name RENAME COLUMN column_name TO new_column_name;`
    
- Add a new column to a table : 새 컬럼 추가
    
    `ALTER TABLE table_name ADD COLUMN column_definition;`
    
    - 만약, 테이블에 기존 데이터가 있을 경우 `Cannot add NOT NULL column with default value NULL` 에러 발생 : 이전에 이미 저장된 데이터들은 새롭게 추가되는 컬럼에 값이 없기 때문에 NULL이 작성됨. 그런데 새로 추가되는 컬럼에 NOT NULL 제약조건이 있기 때문에 기본 값 없이는 추가될 수 없다는 에러가 발생한 것 → DEFAULT 제약 조건(데이터를 추가할 때 값을 생략할 시에 기본 값을 설정)을 사용하여 해결
    - `ALTER TABLE now_contacts ADD COLUMN address TEXT NOT NULL DEFAULT 'no address';` : 이렇게 하면, address 컬럼이 추가되면서 기존에 있던 데이터들은 address 컬럼 값은 ‘no address’가 됨.
- Delete a column : 컬럼 삭제
    
    `ALTER TABLE table_name DROP COLUMN column_name;`
    
    - 단, 삭제하지 못하는 경우가 있음.
        - 컬럼이 다른 부분에서 참조되는 경우
        - FOREIGN KEY(외래 키) 제약조건에서 사용되는 경우
        - PRIMARY KEY인 경우
        - UNIQUE 제약 조건이 있는 경우

1.2.1.5. DROP TABLE

- 데이터 베이스에서 테이블을 제거 `DROP TABLE users;`
- 존재하지 않는 테이블을 제거하면 SQLite에서 오류가 발생 `no such table : table_name`
- 한번에 하나의 테이블만 삭제할 수 있음 → 여러 테이블을 제거하려면 여러 DROP TABLE 문을 실행해야 함
- DROP TABLE 문은 실행 취소하거나 복구할 수 없음. = 주의해서 사용!

1.2.2. DML (Data Manipulation Language) : CRUD

- INSERT, SELECT, UPDATE, DELETE

1.2.2.1. CSV 파일을 SQLite 테이블로 가져오기

- 콘솔창
    
    ```sql
    sqlite mydb.sqlite3
    .mode csv 
    .import users.csv users
    ```
- 테이블 설정
    
    ```sql
    CREATE TABLE users (
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    age INTEGER NOT NULL,
    country TEXT NOT NULL,
    phone TEXT NOT NULL,
    balance INTEGER NOT NULL
    );
    ```
    

1.3. Simple query

- SELETE 문 : SQLite에서 가장 복잡한 문
    - `SELECT * FROM users;` : 테이블 전체(*, all) 데이터 조회.
- ORDER BY ⭐ : 결과를 정렬하는 기능. SELETE 명령어 뒤, ORDER BY절 전에 위치
    - 오름차순 ASC, 내림차순 DESC 설정이 가능함.
    - `SELECT first_name, age, balance FROM users ORDER BY age ASC;` : 이름과 나이가 어린 순서대로 조회
    - ASC는 생략이 가능. 기본값이 오름차순이기 때문
    - 순서가 중요함. 순서대로 적용되기 때문!
- DISTINCT : 조회결과에서 중복된 행을 제거함. DISTINCT 절은 SELECT에서 선택적으로 사용할 수 있는 절
    - ⭐⭐⭐**문법규칙(PPT 문법규칙들 시험문제내기 좋음!)**⭐⭐⭐ : ① DISTINCT 절은 SELECT 키워드 바로 뒤에 나타나야 함. ② DISTINCT 키워드 뒤에 컬럼 또는 컬럼 목록을 작성함.
    - `SELECT DISTINCT first_name, country FROM users;` : 이름, 지역을 겹치지 않게 출력
    - `SELECT DISTINCT first_name, country FROM users ORDER BY country;` : 이름과 지역 중복없이 지역 순으로 오름차순 정렬
    - 참고] NULL with DISTINCT : SQLite는 NULL 값을 중복으로 간주함. NULL 값이 있는 컬럼에 DISTINCT 절을 사용하면 SQLite는 NULL 값의 한 행을 유지
- ⭐ WHERE : 조회 시 특정 검색 조건을 지정함.
    - WHERE 절은 SELECT 문, UPDATE 및 DELETE문에서 에서 선택적으로 사용할 수 있는 절임
    - **FROM절 뒤에 작성**
    - `SELECT * FROM users WHERE country='제주특별자치도';` : 제주특별자치도를 country 값으로 갖는 사람을 출력
    - COMPARISON_OPERATOR : LIKE, IN(값이 안에 있는가), BETWEEN, NOT, OR 와 같은 조건들을 추가할 수 있음. → 조건에 맞는 row가 출력됨.
    - `<>` : 같지 않음.
    - `SELECT first_name, age, balance FROM users WHERE age>=30;` : 나이가 30살 이상인 사람의 이름, 나이, 잔고를 출력
    - `SELECT first_name, age, balance FROM users WHERE age>=30 and balance>500000;` : 나이가 30이상, 잔고가 50만원 이상
- LIMIT : 쿼리에서 반환되는 행 수를 제한함 `SELECT column_list FROM table_name LIMIT row_count;`
    - SELECT 문에서 선택적으로 사용할 수 있는 절
    - row_count는 반환되는 행 수를 지정하는 양의 정수를 의미
    - `SELECT rowid, first_name FROM users LIMIT 10;` : 첫 번째부터 열 번째 데이터까지 rowid 와 이름 조회
    - `SELECT first_name, balance FROM users ORDER BY balance DESC LIMIT 10;` : 계좌 잔고가 가장 많은 10명의 이름과 계좌잔고 조회
        - ORDER BY 절을 함께 사용하여 지정된 순서로 여러 행을 가져올 수도 있음. LIMIT 절에 지정된 행 수를 가져오기 전에 결과를 정렬하기 때문
    - `SELECT first_name, age FROM users ORDER BY age LIMIT 5;` : 나이가 가장 어린 5명의 이름과 나이 조회
        
        ⭐그냥 개인적으로 offset 시험나올거같음 어려우니까!⭐
        
    - **OFFSET** : LIMIT 절을 사용하면 첫 번째 데이터부터 지정한 수의 데이터만큼 받아올 수 있지만, OFFSET과 함께 사용하면 특정 지정된 위치에서부터 데이터를 조회할 수 있음.
        - offset을 지정하지 않으면 시작부터, 지정하면 그 지정한 부분을 빼고, 그 다음부터 진행
        - `SELECT rowid, first_name FROM users LIMIT 10 OFFSET 10;` : 11번째부터 20번째 데이터의 rowid와 이름 조회하기
- LIKE : 패턴 일치를 기반으로 데이터를 조회
    - SELECT, DELETE, UPDATE 문의 WHERE 절에 사용
    - ⭐⭐⭐**기본적으로 대소문자를 구분하지 않음**⭐⭐⭐. ‘A’ LIKE 'a’는 true 값을 가짐.
    - 와일드카드(Wildcards)가 존재함.
        
        - %(percent) : 0개 이상의 문자가 올 수 있음을 의미
            - ‘영%’ 패턴은 영으로 시작하는 모든 문자열과 일치 (영, 영미, 영미리 등)
            - ‘%도’ 패턴은 도로 끝나는 모든 문자열과 일치(도, 수도, 경기도 등)
            - ‘%강원%’ 패턴은 강원을 포함하는 모든 문자열과 일치. 중간에 강원이라는 글자가 들어가 있는 모든 것을 의미함. (ex. 강원도, 건강원 등)
            - `SELECT first_name, last_name FROM users WHERE first_name LIKE '%호%';` : 이름에 ‘호’가 포함되는 사람
            - `SELECT first_name, phone FROM users WHERE phone LIKE '02-%';` : 전화번호가 02로 시작하는 사람
        - _(underscore) : 단일(1개) 문자가 있음을 의미
            - ‘영_’ 패턴은 영으로 시작하고 총 2자리인 문자열과 일치
            - ‘_도’ 패턴은 도로 끝나는 총 2자리인 문자열과 일치
            - `SELECT first_name, last_name, age FROM users WHERE age LIKE '2_';` : 나이가 20대인 사람들 이름과 나이 조회`
            - `SELECT first_name, phone FROM users WHERE phone LIKE '%-51%-____';` : 전화번호 중간번호가 51로 시작하는 사람 `%-51__-%` 도 가능함.
- IN : 값이 값 목록 결과에 있는 값과 일치하는지 확인
    - 표현식이 값 목록의 값과 일치하는지 여부에 따라 true 또는 false를 반환
    - IN 연산자의 결과를 부정하려면 **NOT IN** 연산자를 사용
    - `SELECT first_name, country FROM users WHERE country IN ('경기도', '강원도');` : 경기도 혹은 강원도에 사는 사람들의 이름과 지역 조회 → 같은 결과 반환 `SELECT first_name, country FROM users WHERE country country='경기도' OR country='강원도';`
    - `SELECT first_name, country FROM users WHERE country NOT IN ('경기도', '강원도');` : 경기도 혹은 강원도에 살지 않는 사람
- BETWEEN : 값이 값 범위 내에 있는지 테스트
    - 값이 지정된 범위에 있으면 true를 반환함.
    - SELECT, DELETE, 및 UPDATE 문의 WHERE 절에서 사용할 수 있음.
    - BETWWEN 연산자의 결과를 부정하려면 **NOT BETWEEN** 연산자를 사용
    - `SELECT first_name, age FROM users WHERE age BETWEEN 20 AND 30;` : 나이가 20살 이상 30살 이하인 사람들 → 같은 결과 반환 `SELECT first_name, age FROM users WHERE age >= 20 AND age <= 30;`
    - `SELECT first_name, age FROM users WHERE age NOT BETWEEN 20 AND 30;` 20살 이상, 30살 이하가 아닌 사람들 → 같은 결과 반환 `SELECT first_name, age FROM users WHERE age < 20 OR age > 30;`
- GROUP BY


2. SQL : DML 활용 및 CRUD

2.1. Grouping data

2.1.1 Aggregate function : “집계함수” 여러 행의 값을 1개의 값으로 뽑아낼 때 사용하는 함수

- 값 집합의 최대값(MAX), 최소값(MIN), 평균(AVG), 합계(SUM) 및 개수(COUNT)를 계산할 수 있음.
    - SELECT 문의 GROUP BY 절과 함께 종종 사용
- 값 집합에 대한 계산을 수행하고 단일 값을 반환 : 여러 행으로부터 하나의 결과 값을 반환하는 함수임
- 숫자를 기준으로 계산이 되어져야 하기 때문에 반드시 컬럼의 데이터 타입이 숫자(INTEGER) 일 때만 사용 가능

- COUNT : 데이터의 개수를 셈 `SELECT COUNT(*) FROM users;`
- AVG : 데이터의 평균 값 `SELECT AVG(balance) FROM users;`
- 전라북도로 평균을 구해서 정리하기 `SELECT country, avg(balance) FROM users WHERE country="전라북도";` → 조건이 많아져서 불편할 때는, GROUP BY

2.1.2. GROUP BY 

- `SELECT column_1, aggragate_function(column_2) FROM table_name GROUP BY column_1, column_2;`
- 특정 그룹으로 묶인 결과를 생성함.
- 선택된 컬럼 값을 기준으로 데이터(행)들의 공통 값을 묶어 결과로 나타냄.
- SELECT 문에서 선택적으로 사용가능한 절
- SELECT 문의 FROM 절 뒤에 작성 : WHERE 절이 포함된 경우에는 WHERE 절 뒤에 작성


2.2. Changing data : 데이터를 삽입, 수정 삭제하기

2.2.1. INSERT : 새 행을 테이블에 삽입

- **⭐ 문법 규칙 ⭐**
    - 1) INSERT INTO 키워드 뒤에 데이터를 삽입할 테이블의 이름을 지정
    - 2) 테이블 이름 뒤에 쉼표로 구분된 컬럼 목록을 추가 : 컬럼 목록은 선택 사항이지만, 컬럼 목록을 포함하는 것이 권장됨
    - 3) VALUES 키워드 뒤에 쉼표로 구분된 값 목록을 추가함 : 만약, **컬럼 목록을 생략하는 경우, 값 목록의 모든 컬럼에 대한 값을 지정해야 함**. 값 목록의 값 개수는 컬럼 목록의 컬럼 개수와 같아야 함.
- `INSERT INTO classmate(name, age, address) VALUES('홍길동', 23, '서울');`
    - 컬럼순서는 생략 가능 `INSERT INTO classmate VALUES('홍길동', 23, '서울');`
    - 여러 행 삽입하기
        
        `INSERT INTO classmate VALUES('김철수', 30, '경기'), ('이영미',31,'강원'), ('박진성', 26, '전라'), ('최지수', 12, '충청'), ('정요한', 28, '경상');`
        

2.2.2. UPDATE : 새 행을 테이블에 삽입

- 순서
    1) UPDATE 절 이후에 업데이트 할 테이블을 지정
    2) SET 절에서 테이블의 각 컬럼에 대해 새 값을 설정
    3) WHERE 절의 조건을 사용하여 업데이트할 행을 지정
        - WHERE절은 선택사항. 생략하는 경우, UPDATE 문은 테이블의 모든 행에 있는 데이터를 업데이트함.
    4) 선택적으로 ORDER BY 및 LIMIT 절을 사용하여 업데이트할 행 수를 지정할 수도 있음.

2.2.3. DELETE : 테이블에서 행을 제거

- 한 행, 여러 행 및 모든 행을 삭제할 수 있음.
- 문법규칙
     1) DELETE FROM 키워드 뒤에 행을 제거하려는 테이블의 이름을 지정
     2) WHERE 절에 검색 조건을 추가하여 제거할 행을 식별 : WHERE 절은 선택 사항이며, 생략하면 DELETE 문은 테이블의 모든 행을 삭제함.
     3) 선택적으로 ORDER BY 및 LIMIT 절을 사용하여 삭제할 행 수를 지정할 수 있음.
- 5번째 데이터 삭제 : `DELETE FROM classmate WHERE rowid=5;`
- 삭제된 것 확인하기 : `SELETE rowid, * FROM classmates;`
- 이름에 ‘영’이 포함되는 데이터 삭제 : `DELETE FROM classmate WHERE name LIKE '%영%';`
- 테이블의 전체 데이터 삭제(Drop table 절대 X. 테이블 전체를 날리는게 아니라 데이터만 삭제하는 것이니까)  : `DELETE FROM classmate;`
- 참고] soft_delete 와 hard_delete
    - soft_delete : 지우기는 지우는데, 지웠다고 표시하는 삭제
    - hard_delete : 우리가 배운 delete. 온전한 삭제

<br>
<br>

3. JOIN : 두 개 이상의 테이블에서 데이터를 가져와 결합하는 것


- 테이블을 여러 개로 나누는 것은 당연하고, 필수적인 과정 (ex. articles, users, roles … → 각 게시글을 누가 작성했는지, 누가 어떤 role을 가졌는지 알 수 있는가?)
- 테이블을 나눠놓으면, 조회할 때 여러 테이블의 값을 가져와서 조회해야하는 상황이 발생 = 이게 자연스러운 상황, 결국 우리가 조회하려면 모아서 하나의 테이블로 만들어야함.
- JOIN : 두 개 이상의 테이블에서 데이터를 가져와 결합하는 것을 말함.
- 각 테이블 별로 join을 해서 정보를 알 수 있음.

3.1. Cross Join : 자주 쓰지는 않음. 모든 조합 출력. 곱하기 같은거라고 생각하기

- `SELETE * FROM articles, users;` : 이렇게 해도 나름 가져와줌. 하지만 원하는 방식은 아님. userId와 roleId 가 동일하게 맞춰진 형태로 테이블이 합쳐지길 원함.    
    - 그럼, `SELECT * FROM articles, users WHERE articles.userid = users.id;` 그리고, `SELECT * FROM articles, users WHERE userid = users.id;` 이 방식으로 진행

3.2. INNER JOIN : 두 테이블에서 일치하는 데이터만 결과 출력

- `{테이블 1} INNER JOIN {테이블2} ON {조건식}`
- 더 명확하기 때문에 되도록 inner join을 활용해 합치는 것이 좋음.
- ⭐ `SELECT * FROM articles INNER JOIN users ON userId=users.rowld;`
- WHERE를 사용했을 때와의 차이점에 대해서 생각해보자! → 내부적으로 데이터를 합쳐줌.(엮어줌)

3.3. OUTER JOIN

- 내용이 수정되어 데이터의 길이가 맞지 않는 경우, 혹은 값이 누락되어 빈 값이 있는 경우

3.3.1. LEFT JOIN : 왼쪽 테이블의 데이터를 기준으로 오른쪽 데이터 결합, 없으면 NULL

`SELECT * FROM articles LEFT JOIN users ON userId=users.rowld;`

- 그럼 일단 왼쪽에 있는 데이터는 전부 가져와 진행. 데이터가 비어있는 경우, Null로 자동 설정
- 설계 시 잘 확인하고, 생각해서 정하기

3.3.2. RIGHT JOIN : 오른쪽 테이블의 데이터를 기준으로 왼쪽 데이터 결합, 없으면 NULL

`SELECT * FROM articles RIGHT JOIN users ON userId=users.rowld;`

