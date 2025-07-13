# Week 05 - JavaScript 5주차 과제 ✍️

## ✅ 과제 개요

- **주제** : 자율 주제 앱 구현
- **목표** : HTML, CSS, 그리고 JavaScript만을 활용하여, 간단한 앱을 설계하고 구현해보기
- **제작 앱** : **Pastimer** (Pasta + Timer)
  → 파스타 면을 삶는 시간을 지루하지 않게 보내기 위한 타이머 앱

---

## 🧠 기획 의도

파스타를 만들 때마다 매번 느끼는 점이 있습니다.  
물을 끓이는 시간은 금방 지나가지만, 면을 삶는 시간은 꽤 오래 걸립니다.  
재료 손질은 물이 끓는 동안 마무리되기 때문에,  
정작 면을 넣고 나면 10분이 넘는 시간을 멍하니 기다리게 되는 경우가 많았습니다.

그 시간 동안 스마트폰을 그냥 들여다보거나 멍하게 시간을 보내다 보니,  
"이 시간을 조금 더 의미 있고 재미있게 보낼 수는 없을까?" 하는 생각이 자연스럽게 들었습니다.

그렇게 떠오른 아이디어가 바로 **Pastimer**입니다.  
단순히 시간을 재는 기능에 그치지 않고,  
**면을 삶는 동안 간단한 퀴즈나 소소한 활동을 제공**하여,  
**사용자가 시간을 더 유쾌하게 보낼 수 있도록 돕는 앱**을 만들고자 합니다.

---

## 📁 폴더 구조

```
.
├── assets
│   ├── favicon
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── site.webmanifest
│   └── images
├── index.html
├── README.md
└── src
    ├── script
    │   └── quiz-data.js
    ├── script.js
    └── styles
        └── style.css
```

---

## ⚙️ 구현 과정

### [STEP 01] 삶는 시간 선택 및 시작 버튼 활성화

사용자가 8분, 10분, 12분 중 하나를 선택하면 해당 값이 타이머로 설정되고, 타이머 시작 버튼이 활성화됩니다.  
이 기능을 위해 `data-time` 속성값을 읽고, `parseInt()` 를 활용해 숫자로 변환한 후 저장하였습니다.

```js
selectedTime = parseInt(e.target.dataset.time, 10);
```

▪️ 사용자가 선택한 버튼의 data-time 속성은 문자열이기 때문에, parseInt 를 통해 10진수 정수로 변환해야 나중에 selectedTime \* 60 같은 계산이 가능해집니다.

![Pastimer - STEP01.gif](/week05/assets/images/Pastimer%20-%20STEP01.gif)

> ### 🤖 시행착오
>
> 초반에는 `selectedTime`이 제대로 저장되지 않아 타이머가 시작되지 않았습니다. `data-time` 속성이 문자열로 저장되어 있었던 것을 캐치하고, parseInt()를 사용하여 해결했습니다.

### [STEP 02] 타이머 시작 및 카운트다운 기능

타이머 시작 버튼을 클릭하면, 홈 화면이 숨겨지고 타이머 화면이 표시됩니다.  
사용자가 선택한 삶기 시간을 초 단위로 환산한 뒤, 수업 시간에 배운 `setInterval()` 함수를 활용하여 매 1초마다 시간을 줄여가는 카운트다운 로직을 구현했습니다.

```js
remainingSeconds = selectedTime * 60;

const countdown = setInterval(() => {
  remainingSeconds--;
  updateTimerDisplay(remainingSeconds);

  if (remainingSeconds <= 0) {
    clearInterval(countdown);
    timerScreen.classList.add('is-hidden');
    doneScreen.classList.remove('is-hidden');
  }
}, 1000);
```

▪️ `updateTimerDisplay(seconds)` 함수는 남은 초(`seconds`)를 MM:SS 형식으로 포맷해서 화면에 표시해주는 역할을 합니다.  
▪️ 예를 들어, 125초 → 02:05 처럼 보기 좋게 바꾸어주는 함수입니다.

![Pastimer - STEP02.gif](/week05/assets/images/Pastimer%20-%20STEP02.gif)

> ### 🤖 시행착오
>
> 타이머가 00:00에서 멈추지 않고 마이너스로 계속 내려가는 문제가 있었습니다.  
> 조건문을 `remainingSeconds === 0` 으로 설정했던 것이 문제였고, `remainingSeconds <= 0` 으로 수정하여 정상 작동하도록 했습니다.

### [STEP 03] 퀴즈 문제 랜덤 표시 및 정답 처리

타이머가 작동하는 동안, 사용자에게 랜덤 퀴즈 문제를 하나씩 보여줍니다.  
문제를 하나씩 뽑아 화면에 표시하고, 정답을 선택하면 피드백이 제공됩니다.

```js
// 문제 하나 무작위 선택 후 화면에 표시
const randomIndex = Math.floor(Math.random() * remainingQuizzes.length);
const quiz = remainingQuizzes.splice(randomIndex, 1)[0];
```

```js
// 선택지 버튼 생성
quiz.options.forEach(option => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = option;
  button.className = 'quiz__option';
  quizOptions.appendChild(button);
});
```

```js
button.addEventListener('click', () => {
  // 모든 버튼 비활성화
  const allOptions = quizOptions.querySelectorAll('.quiz__option');
  allOptions.forEach(button => (button.disabled = true));

  if (option === quiz.correctAnswer) {
    button.classList.add('correct');
    quizFeedback.textContent = '정답입니다! 🎉';
  } else {
    button.classList.add('incorrect');
    quizFeedback.textContent = `오답입니다...😔 정답은 ${quiz.correctAnswer}입니다.`;
  }

  // 정답 버튼은 항상 파란색으로 표시]
  allOptions.forEach(button => {
    if (button.textContent === quiz.correctAnswer) {
      button.classList.add('correct');
    }
  });

  // 2.5초 후 다음 문제 자동 표시
  setTimeout(showRandomQuiz, 2500);
});
```

![Pastimer - STEP03(1).gif](</week05/assets/images/Pastimer%20-%20STEP03(1).gif>)

사용자가 클릭한 버튼이 정답일 경우, 버튼을 파란색으로 표시합니다.

![Pastimer - STEP03(2).gif](</week05/assets/images/Pastimer%20-%20STEP03(2).gif>)

사용자가 클릭한 버튼이 오답일 경우, 버튼을 빨간색으로 표시하고, 정답 버튼은 파란색으로 표시합니다.

> ### 🤖 시행착오
>
> 처음에는 문제가 모두 소진되었을 때 메시지를 표시하지 않으려고 했습니다.  
> 이유는 앱의 목적이 타이머가 끝날 때까지 사용자가 지루하지 않게 하기 위함이기 때문입니다.  
> 하지만, `remainingQuizzes.length === 0` 일 때 처리를 생략하면 에러가 발생하였고, 임시로 “모든 문제를 풀었어요”라는 메시지를 출력하는 방식으로 보완했습니다.

```js
if (remainingQuizzes.length === 0) {
  quizWrapper.innerHTML = `<p>모든 문제를 풀었어요! 👏</p>`;
  return;
}
```

### [STEP 04] 다시 시작 기능 구현

타이머가 종료되면 “면을 건지러 가 볼까요?”라는 메시지가 표시되고, 다시 시작하기 버튼을 클릭하면 홈 화면으로 돌아가 초기화됩니다.

```js
restartButton.addEventListener('click', () => {
  doneScreen.classList.add('is-hidden');
  homeScreen.classList.remove('is-hidden');
  startButton.disabled = true;
  startButton.classList.remove('active');
  selectedTime = null;
});
```

![Pastimer - STEP04.gif](</week05/assets/images/Pastimer - STEP04.gif>)

---

## 💬 회고

이번 과제는 자율 주제를 선정했기 때문에 정말 0부터 시작해야 했다.  
그래서 그런지 지금까지 진행한 모든 과제를 통틀어서 가장 많은 시간을 소요했다. 😩  
매번 느끼는 거지만, 이렇게 간단한 로직 하나 구현하는 것도 왜 이렇게 오래 걸리는 건지..  
(강사님께서 이번 과제 마감 기한을 늘려주지 않으셨다면, 나는 아마 제시간에 제출 못 했을 거다 🫥)

처음에는 만들고 싶은 욕구가 마구마구 생겨서 엄청 즐겁게 시작했는데,  
로직 구현의 끝자락에 다다르니까 점점 지쳐서 깔끔하게 마무리하지 못 한 거 같다.  
그래도 이 정도만 해도 잘했다고 나 자신을 칭찬헤주고 싶다. 🙂  
중간중간 구현을 어떻게 해야 할지 몰라서 피키한테 도움을 청하기도 했다.  
왜 이런 방식으로 구현해야 하는지 계속 질문하고 고민하면서 내 것으로 만들기 위해 노력했다.  
그리고 점점 마크업과 스타일 구성 시간이 줄어든다. 역시 연습만이 살 길인가?  
주말 내내 과제만 붙잡고 있었던 덕에 수업 내용 복습은 제대로 한 거 같다.

그동안은 자바스크립트로 뭔가 "내가 직접 만든 것"이 없었는데, 이번 과제를 통해 정말 처음부터 끝까지 혼자 기획하고 구현해보면서 "나도 이런 거 만들 수 있구나" 하는 자신감을 조금 얻은 것 같다.  
물론 완성도나 코드 구조 면에서는 아직 부족한 점이 많지만, 아이디어를 코드로 표현하고 실행해보는 경험 자체가 큰 의미가 있었다.

다음 과제는 이번보다 더 효율적으로, 더 깔끔하게 마무리할 수 있기를~ 😌
