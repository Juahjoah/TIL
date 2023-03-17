# “거인의 어깨 위에서 프로그래밍하기”
    - 누군가 만들어 놓은 코드를 재사용하는 것은 이미 익숙한 개발문화임.
    - 수많은 개발자들이 다양한 서비스를 개발해보면서 그 과정에서 자주 사용되는 부분을 재사용할 수 있게 좋은 구조의 코드로 만들어둠.
    - 적재적소에 정보를 활용하는 것도 능력! ➡ 우리에게는 Bootstrap이 있다!

<hr>
<h2># Django</h2>

- Django는 서버를 구현하는 웹 프레임워크
- 모든 것은 공식문서(https://docs.djangoproject.com/en/4.1/intro/)로부터!
- 장고 기본 설정

      1) 장고 버전맞춰 직접 설치하기
      pip install django==3.2

      2) 장고 버전 제대로 설치되었나 확인하기
      pip list

      3) manage.py 파일 실행 ➡ 무조건 동일 폴더에서만 가능
      python manage.py runserver ➡ 서버실행 가능(단축키 : Ctrl+주소 클릭)

<h2># 가상환경(venv)</h2>

- 이제 쓰고 싶은 모든 외부 패키지를 직접 가져다 쓸 수 있음. → 만약이 패키지를 하나의 환경에 담아야 한다면? → 아무것도 설치되지 않은 깨끗한 환경에서 가상환경으로 묶기
- 가상환경 만드는 것을 습관화하기
  
      1) 폴더 git bash로 만들기 (그냥 만들기도 가능)
      mkdir django-pjt(pjt 이름)

      2) 가상환경 만들기
      python -m venv venv (마지막 venv는 가상환경 이름임. 보통 venv를 동일하게 사용함.)

      3) 가상환경 실행하기
      source venv/Scripts/activate 
