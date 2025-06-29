# Week 03 - JavaScript 3주차 과제 ✍️

## ✅ 과제 개요

- **주제** : 제공된 디자인 시안을 기반으로 추천 게임 캐러셀 UI 컴포넌트 직접 구현
- **목표** : HTML, CSS, JavaScript로 컴포넌트 구조 및 상태 로직 구현

---

## 📁 폴더 구조

```
.
├── assets
│   └── images
├── README.md
└── src
    ├── index.html
    ├── script.js
    └── styles
        ├── base
        │   ├── reset.css
        │   └── variables.css
        ├── components
        │   ├── content-link.css
        │   ├── nav-button.css
        │   └── title-link.css
        ├── main.css
        └── pages
            └── carousel.css
```

---

## 🖼️ 화면 미리보기

![캐러셀 데모](./demo.gif)

- 캐러셀에는 총 6장의 콘텐츠 카드가 있으며, 한 번에 2장씩 표시됩니다.
- 이전/다음 버튼을 눌러 콘텐츠를 좌우로 이동할 수 있습니다.
  > 💡 참고:  
  > ❗️ 현재는 카드가 이동하지만, 페이지네이션 숫자(1 / 3)는 실제 페이지와 동기화되어 있지 않습니다.  
  > ❗️ 페이지네이션 기능은 아직 구현하지 못 했으며, 추후 학습 후 보완 예정입니다.

## 🔍 구현 상세 설명

### 1️⃣ 주요 요소 선택

```js
const carousel = document.querySelector('.carousel');
const cardContainer = carousel.querySelector('.card__container');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
```

- `carousel` : 캐러셀 전체 섹션 요소를 선택합니다.
- `.card__container` : 모든 카드 요소들을 감싸는 컨테이너입니다.
- `.carousel__button--prev` / `--next` : 이전 / 다음 버튼 요소를 각각 선택합니다.

### 2️⃣ 캐러셀 동작에 필요한 변수 설정

```js
let currentIndex = 0;
const cardWidth = 160;
const gap = parseInt(getComputedStyle(cardContainer).gap);
const cardsPerPage = 2;
const totalCards = cardContainer.children.length;
const maxIndex = totalCards / cardsPerPage - 1;
```

- `currentIndex` : 현재 보여지는 카드 페이지의 인덱스를 저장합니다. (초기값 0)
- `cardWidth` : 카드 하나의 너비를 픽셀 단위로 저장합니다.
- `gap` : 카드 사이의 간격(gap)을 동적으로 가져옵니다.
- `cardsPerPage` : 한 번에 화면에 보여질 카드의 수를 설정합니다. (2장)
- `totalCards` : 전체 카드의 수를 계산합니다.
- `maxIndex` : 캐러셀이 이동할 수 있는 최대 인덱스를 계산합니다. (예 : 총 6장의 카드 -> 6 / 2 - 1 = 2)

### 3️⃣ 다음 버튼 클릭 이벤트

```js
nextButton.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex += 1;
    const moveForward = (cardWidth + gap) * cardsPerPage * currentIndex;
    cardContainer.style.setProperty(
      'transform',
      'translateX(-' + moveForward + 'px)'
    );
  }
});
```

- `currentIndex < maxIndex` 조건을 통해 마지막 페이지 이상으로 넘기지 않도록 제한합니다.
- `currentIndex`를 1 증가시켜 다음 페이지로 이동합니다.
- 카드 하나의 너비 + 간격을 고려해서 현재 인덱스만큼 왼쪽으로 이동합니다.
- `setProperty('transform', 'translateX(...)`를 적용하여 카드들이 왼쪽으로 슬라이드되도록 합니다.

### 4️⃣ 이전 버튼 클릭 이벤트

```js
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    const moveBackward = (cardWidth + gap) * cardsPerPage * currentIndex;
    cardContainer.style.setProperty(
      'transform',
      'translateX(-' + moveBackward + 'px)'
    );
  }
});
```

- `currentIndex > 0` 조건으로 첫 번째 페이지 이전으로는 가지 않도록 제한합니다.
- `currentIndex`를 1 감소시켜 이전 페이지로 이동합니다.
- 동일하게 카드 너비와 간격을 계산하여 오른쪽으로 슬라이드되도록 합니다.

---

## 🐞 시행착오 및 해결 과정

❌ 이미지 카드가 한 화면에 전부 노출되었음.  
✅ `.card__container`에 `overflow: hidden`을 주고, 2장만 보이도록 CSS 수정.

❌ 캐릭터 이미지가 잘림.  
✅ `card__image--character`에 `position: relative` 적용하여 상단 여백 확보 -> 이미지 잘림 해결.

❌ 버튼 클릭 이벤트가 작동하지 않음.  
✅ 동일한 클래스명의 버튼이 여러 개 있었음 -> 정확한 요소만 선택하도록 수정.

❌ `gap` 값이 계산에 사용되지 않음.  
✅ `getComputedStyle().gap`이 문자열로 반환되어 `parseInt()` 숫자형 변환 후 사용.

---

## 💬 회고

이번 과제는 지금까지 부트캠프 수업을 들으며 진행한 과제 중 가장 시간이 많이 소요된 과제였다.  
아직 JavaScript가 익숙하지 않다는 걸 절실히 느꼈고, 심지어 요구사항대로 모두 구현하지도 못 했는데 이렇게까지 시간이 오래 걸린 건 처음이었다.  
특히 HTML과 CSS 파트에서만 거의 6시간 이상을 쏟아부었고, 그로 인해 정작 JavaScript를 구현할 시간과 에너지가 부족했다.  
이건 JavaScript 과제의 회고에 쓸 말은 아닐지도 모르지만... 나에게는 마크업과 스타일링이 오히려 더 어렵게 느껴진다. 😢  
JS는 작동이 안 될 때 오류 메시지라도 알려주지만, HTML과 CSS는 에러도 없고 조용히 '안 되는 상태'로 있기 때문에 이유를 찾느라 훨씬 더 지치게 만드는 것 같다.  
그래도 어찌저찌 UI는 따라 만들었고, 일부 기능도 구현할 수 있었다는 점은 칭찬해주고 싶다.  
아직 많이 부족하다는 걸 느낀 만큼, 더 많은 실습과 반복 학습이 필요하다는 생각이 들었다.  
앞으로는 마크업과 스타일링 구조를 좀 더 빠르게 잡는 연습을 하면서, JavaScript에 더 많은 시간을 투자할 수 있도록 시간 배분에도 신경을 써야겠다.  
"완성도보다 학습의 과정이 중요하다"는 말을 되새기며, 다음 과제는 조금 더 나아진 모습으로 임하고 싶다.
