<aside>
❗ Django 시작하기
<hr>

1. 프로젝트를 위한 폴더를 생성함. <br>
    a. `mkdir 프로젝트 폴더명`
2. 프로젝트 폴더를 우클릭하여 vscode로 열어줌.
3. `.gitignore` 파일을 생성 : 만들어놓고 시작하는게 좋음.<br>
    a. `touch.gitignore` : 터미널 명령어<br>
    b. gitignore.io 에서 `visualStudioCode`, `Python`, `Django` 를 선택해서 생성한 다음, 복붙한다.
4. 가상환경을 설정함.<br>
    a. `python -m venv venv`를 통해 가상환경 만들기 ➡ python -m venv 가상환경 폴더명
5. 가상환경 활성화 <br>
    a. `source venv/Scripts/activate` : source v탭 s탭 a탭 <br>
    b. ~~Mac에서는 (venv/Bin/activate)~~ <br>
    c. 활성화가 되었다면, 상단에 `(venv)` 확인 <br>
    d. 추가로 `pip list`를 통해서 정상적으로 생성되었는지 확인하기 <br>
    &ensp; &ensp; &ensp; * 설치된 패키지들이 없으면 OK ! <br>
6. 장고를 설치함. (필요한 패키지 함께 설치)<br>
    a. `pip install django==3.2`<br>
    b. 만약, `requirements.txt` 가 제공된다면, <br>
    &ensp; &ensp; &ensp; *  ⭐`pip install -r requirements.txt` ⭐⭐⭐⭐⭐
7. ⭐`requirements.txt`파일을 생성함. ⭐⭐⭐⭐⭐<br>
    a. 패키지의 목록을 버전과 함께 작성해두는 파일을 말함.<br>
    b. 따라서 설치하고, 이 파일을 만들어두는 습관을 들이면 좋음. 추천하는 습관임!<br>
    c. `pip freeze > requirements.txt`
    
    <hr>
    
8. 모든 설치가 끝났으니, 프로젝트를 생성하자.<br>
    a. `django-admin startproject 프로젝트명.`<br>
    &ensp; &ensp; &ensp; i. 마지막에 `.`이 있는 경우는 현재 폴더에 바로 파일을 생성<br>
    &ensp; &ensp; &ensp; ii. `.` 이 없으면, 프로젝트명으로 폴더를 만들고, 그 내부에 파일을 생성
9. 장고 application을 생성<br>
    a. `python manage.py startapp 앱 이름`<br>
    &ensp; &ensp; &ensp; i. 앱 이름은 복수형으로 작성하는 것을 권장<br>
    b. `settings.py` 내부에 방금 생성한 앱을 등록<br>
    &ensp; &ensp; &ensp; i. `INSTALLED_APP` 리스트 내부에 어플리케이션 이름을 문자열 형태로 등록<br>
    &ensp; &ensp; &ensp; ii. 주의! `,` 빠지지 않도록 신경써주기<br>
<hr>
❗ 장고 준비 2단계

1. 공용 `base.html` 을 만든다. <br>
    a. 위치는 프로젝트 폴더 내부에 `templates` 폴더를 만듦. (manage.py 와 같은 위치) → 위치가 중요함.<br>
    b. 그 내부에 `base.html` 을 생성하고, 기본 html 구조를 만들어 줌. (+부트스트랩)<br>
    c. `block` tag를 body에 넣어서 상속가능하게 만들어줌. → `!bb` 로 snippets 등록<br>
        i. 작성해야하는 내용<br>
        
        
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        </head>
        <body>
            <div class="container">
                {% block content %}
                {% endblock content %}
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        </body>
        </html>
        
        
     d. `setting.py` 에 TEMPLATES의 DIRS에 `BASE_DIR / 'templates'` 을 등록하면 끝! → 보면 위에 BASE_DIR이 존재해서 받아오는 거임. <br>
    
    <hr>
    
2. url 분리를 진행함.<br>
    a. 어플리케이션 폴더 내부에 `ulrs.py` 파일을 새롭게 생성하고 진행 <br>
    &ensp; &ensp; &ensp; 1. path 함수를 import한다.<br>
    &ensp; &ensp; &ensp; 2. urlpatterns라는 빈 리스트를 만들어줌.<br>
    &ensp; &ensp; &ensp; 3. app_name 설정<br>
    &ensp; &ensp; &ensp; 4. views 도 미리 import 해두기<br>
    b. `urls.py` 내부에 snippet을 통해 자동완성함. (snippet은 urlspy로 등록해둠)<br>
    c. app_name 에는 어플리케이션 명을 작성.<br>
    d. 프로젝트 폴더(setting.py가 위치한)에 있는 urls.py에서 방금 작성한 어플리케이션 내부 urls.py에 등록함.<br>
    &ensp; &ensp; &ensp; i. include를 import 하기(상단 주석 참고)<br>
    &ensp; &ensp; &ensp; ii. path 에다가 어플리케이션 urls.py를 include하면 끝! (상단 주석 참고)<br>
            
            `path('articles/', include('articles.urls'))` 추가. 만약 articles에 대한 명령이 들어온다면, articles.urls로 넘어가게 만들어두기
            
