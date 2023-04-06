1. SQL : DML 활용 및 CRUD

1.1. Grouping data

1.1.1 Aggregate function : “집계함수” 여러 행의 값을 1개의 값으로 뽑아낼 때 사용하는 함수

- 값 집합의 최대값(MAX), 최소값(MIN), 평균(AVG), 합계(SUM) 및 개수(COUNT)를 계산할 수 있음.
    - SELECT 문의 GROUP BY 절과 함께 종종 사용
- 값 집합에 대한 계산을 수행하고 단일 값을 반환 : 여러 행으로부터 하나의 결과 값을 반환하는 함수임
- 숫자를 기준으로 계산이 되어져야 하기 때문에 반드시 컬럼의 데이터 타입이 숫자(INTEGER) 일 때만 사용 가능

- COUNT : 데이터의 개수를 셈 `SELECT COUNT(*) FROM users;`
- AVG : 데이터의 평균 값 `SELECT AVG(balance) FROM users;`
- 전라북도로 평균을 구해서 정리하기 `SELECT country, avg(balance) FROM users WHERE country="전라북도";` → 조건이 많아져서 불편할 때는, GROUP BY

1.1.2. GROUP BY 

- `SELECT column_1, aggragate_function(column_2) FROM table_name GROUP BY column_1, column_2;`
- 특정 그룹으로 묶인 결과를 생성함.
- 선택된 컬럼 값을 기준으로 데이터(행)들의 공통 값을 묶어 결과로 나타냄.
- SELECT 문에서 선택적으로 사용가능한 절
- SELECT 문의 FROM 절 뒤에 작성 : WHERE 절이 포함된 경우에는 WHERE 절 뒤에 작성


1.2. Changing data : 데이터를 삽입, 수정 삭제하기

1.2.1. INSERT : 새 행을 테이블에 삽입

- **⭐ 문법 규칙 ⭐**
    - 1) INSERT INTO 키워드 뒤에 데이터를 삽입할 테이블의 이름을 지정
    - 2) 테이블 이름 뒤에 쉼표로 구분된 컬럼 목록을 추가 : 컬럼 목록은 선택 사항이지만, 컬럼 목록을 포함하는 것이 권장됨
    - 3) VALUES 키워드 뒤에 쉼표로 구분된 값 목록을 추가함 : 만약, **컬럼 목록을 생략하는 경우, 값 목록의 모든 컬럼에 대한 값을 지정해야 함**. 값 목록의 값 개수는 컬럼 목록의 컬럼 개수와 같아야 함.
- `INSERT INTO classmate(name, age, address) VALUES('홍길동', 23, '서울');`
    - 컬럼순서는 생략 가능 `INSERT INTO classmate VALUES('홍길동', 23, '서울');`
    - 여러 행 삽입하기
        
        `INSERT INTO classmate VALUES('김철수', 30, '경기'), ('이영미',31,'강원'), ('박진성', 26, '전라'), ('최지수', 12, '충청'), ('정요한', 28, '경상');`
        

1.2.2. UPDATE : 새 행을 테이블에 삽입

- 순서
    1) UPDATE 절 이후에 업데이트 할 테이블을 지정
    2) SET 절에서 테이블의 각 컬럼에 대해 새 값을 설정
    3) WHERE 절의 조건을 사용하여 업데이트할 행을 지정
        - WHERE절은 선택사항. 생략하는 경우, UPDATE 문은 테이블의 모든 행에 있는 데이터를 업데이트함.
    4) 선택적으로 ORDER BY 및 LIMIT 절을 사용하여 업데이트할 행 수를 지정할 수도 있음.

1.2.3. DELETE : 테이블에서 행을 제거

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