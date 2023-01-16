# TIL

## 20230112 TIL
### - MARKDOWN

1. 마크다운(Markdown)이란?

텍스트 기반의 가벼운 마크업(markup). 태그(tag)를 이용하여 문서의 구조를 나타내는 것을 말한다. 
<br/> 문서의 구조와 내용을 동시에 쉽고 빠르게 적기 위해 탄생했으며, 확장자명은 .md 이다.

| 기호 | 출력 |
| ----------- | ----------- |
| # (Heading) | 문서의 제목이나 소제목으로 활용 |
| 1.2.3.,*, -, _ (List) | 순서가 있는 리스트와 순서가 없는 리스트 두 종류 |
| ``````, `` (Code Block) | 일반 텍스트와 차이를 두고 텍스트를 출력 |
| --- (Horizontal line) | 가로로 긴 수평선을 출력 |

> 참고 링크 : [마크다운 문법 참고](https://www.markdownguide.org/cheat-sheet/)  


### - Git/Github

2. Git 이란?

코드의 히스토리(버전)을 관리하는 도구로 개발되어 온 과정 파악 가능하다. 이전 버전과의 변경 사항에 대한 비교·분석이 가능함.

3. Git Lab 이란?

Git이 프로그램이라면, Git Hub는 그 프로그램을 사용하는 저장소의 일종이라고 생각하면 된다. 

> README.md : 프로젝트에 대한 설명 문서. GitHub 프로젝트에서 가장 먼저 보는 문서로 보통 소프트웨어와 함께 배포된다.

> Repository : 특정 디렉토리를 버전 관리하는 저장소.

</br>
</br>
</br>
😲 일단 여기까지 써보고 업로드 해볼까요?



#baek 5338 <br/>
print('''       _.-;;-._<br/>
     '-..-'|   ||   |<br/>
    '-..-'|_.-;;-._|<br/>
    '-..-'|   ||   |<br/>
    '-..-'|_.-''-._|''')<br/>
<br/>
<br/>
#baek 9086 <br/>
 n = int(input()) <br/>
 for _ in range(n): <br/>
     t = input() <br/>
     print(f'{t[0]}{t[-1]}') <br/>
    print(t[0:2]) # 이 라인을 수정
<br/>
<br/>
<br/>
#baek 2475 <br/>
a = input().split() <br/>
acc = 0 
<br/>#acc 라는 변수를 새로 만들어서 합을 거기에 저장했다고 생각하면 될듯 <br/>
for idx in range(5): <br/>
    num = int(a[idx])<br/>
    #print(num)<br/>
    acc += num ** 2<br/>
    #print(num, acc)<br/>
print(acc % 10)  #print(acc - (acc//10)*10)<br/>