# CSS

1. CSS 상대단위(em과 rem)

- 상대(relative) 단위 : 고정되지 않고 어떤 기준에 따라서 유동적으로 바뀔 수 있는 길이를 나타내는 단위
- 절대(absolute) 단위 : 어떤 상황에서든 항상 고정된 길이를 나타내는 단위
- 차이점: 정확히 어디에 있는 font-size 속성값인지에 따라 차이가 발생
- `em`: 해당 단위가 사용되고 있는 요소의 font-size 속성값이 기준
- `rem`: `rem`에서 r은 root, 즉 최상위 요소를 font-size 속성값 의미. 즉, html 요소의 font-size 속성값이 기준


2. `box-sizing`

- `box-sizing`: **CSS에서 요소의 크기를 어떻게 계산할지를 결정하는 속성**
  - 레이아웃을 구성할 때 padding이나 border로 인해 예상치 못한 크기 변화가 발생하는 경우가 많음. 이러한 문제를 제어하는 데 도움을 줌
- 옵션
  - `box-sizing: content-box` (기본값)
    - `content-box`는 기본값 
    - 요소의 `width`와 `height`가 오로지 콘텐츠 영역만을 의미
    - 따라서 padding과 border는 지정된 크기에 **포함되지 않으며**, 실제 요소의 총 크기는 이 값들이 더해져 커지게 됨
    - 예시
        ```css
        .box {
        width: 200px;
        padding: 20px;
        border: 2px solid black;
        box-sizing: content-box;
        }
        ```
        - 실제 요소의 너비 계산:
            - 콘텐츠: 200px
            - 패딩: 20px × 2 = 40px
            - 보더: 2px × 2 = 4px
            - 총 너비 = 244px
        - padding과 border가 총 크기에 영향을 미치므로 예상보다 요소가 커지는 문제가 발생하기 쉬움

  - `box-sizing: border-box`
    - 요소의 width, height가 콘텐츠 + padding + border 전체 영역을 포함하는 크기를 의미
    - 설정한 너비 안에서 padding과 border가 처리되므로 요소의 총 크기가 변하지 않아 레이아웃을 직관적으로 관리하기 좋음
    - 예시:
      ```css
      .box {
        width: 200px;
        padding: 20px;
        border: 2px solid black;
        box-sizing: border-box;
        }
      ```
      - 실제 콘텐츠 영역 계산:
        - 전체 너비: 200px
        - 패딩: 20px × 2 = 40px
        - 보더: 2px × 2 = 4px
        - 콘텐츠 영역 = 200 - 40 - 4 = 156px
        - 요소 크기를 정확하게 유지해야 하는 레이아웃에서 유용
