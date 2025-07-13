{
  const timeOptions = document.querySelector('.time__options');
  const startButton = document.querySelector('.start__button');
  const timeOptionsButtons = document.querySelectorAll('.time__options-button');

  const homeScreen = document.querySelector('.screen__home');
  const timerScreen = document.querySelector('.screen__timer');

  const timerDisplay = timerScreen.querySelector('.timer__time');

  const quizWrapper = timerScreen.querySelector('.quiz__wrapper');
  const quizQuestion = quizWrapper.querySelector('.quiz__question');
  const quizOptions = quizWrapper.querySelector('.quiz__options');
  const quizFeedback = quizWrapper.querySelector('.quiz__feedback');

  const doneScreen = document.querySelector('.screen__done');
  const restartButton = doneScreen.querySelector('.done__restart-button');

  const ACTIVE_CLASSNAME = 'active';
  const SELECTED_CLASSNAME = 'is-selected';
  const HIDDEN_CLASSNAME = 'is-hidden';
  const VISIBLE_CLASSNAME = 'is-visible';

  let selectedTime = null;
  let remainingSeconds = 0;
  let currentAnswer = '';
  let remainingQuizzes = [];

  timeOptions.addEventListener('click', (e) => {
    const userClicked = e.target;
    if (!userClicked.classList.contains('time__options-button')) return;

    timeOptionsButtons.forEach(button => button.classList.remove(SELECTED_CLASSNAME));
    userClicked.classList.add(SELECTED_CLASSNAME);

    selectedTime = parseInt(userClicked.dataset.time, 10);
    startButton.disabled = false;
    startButton.classList.add(ACTIVE_CLASSNAME);
  });

  startButton.addEventListener('click', () => {
    if (!selectedTime) return;

    homeScreen.classList.remove(VISIBLE_CLASSNAME);
    homeScreen.classList.add(HIDDEN_CLASSNAME);
    timerScreen.classList.remove(HIDDEN_CLASSNAME);
    timerScreen.classList.add(VISIBLE_CLASSNAME);

    remainingSeconds = selectedTime * 60;
    updateTimerDisplay(remainingSeconds);
    
    remainingQuizzes = [...quizData];
    showRandomQuiz();

    const countdown = setInterval(() => {
      remainingSeconds--;
      updateTimerDisplay(remainingSeconds);

      if (remainingSeconds <= 0) {
        clearInterval(countdown);

        timerScreen.classList.add(HIDDEN_CLASSNAME);
        timerScreen.classList.remove(VISIBLE_CLASSNAME);
        doneScreen.classList.remove(HIDDEN_CLASSNAME);
        doneScreen.classList.add(VISIBLE_CLASSNAME);
      }
    }, 1000);
  });

  restartButton.addEventListener('click', () => {
    doneScreen.classList.add(HIDDEN_CLASSNAME);
    doneScreen.classList.remove(VISIBLE_CLASSNAME);

    homeScreen.classList.remove(HIDDEN_CLASSNAME);
    homeScreen.classList.add(VISIBLE_CLASSNAME);

    startButton.disabled = true;
    startButton.classList.remove(ACTIVE_CLASSNAME);

    selectedTime = null;
    timeOptionsButtons.forEach(button => button.classList.remove(SELECTED_CLASSNAME));
  });

  /**
     * 남은 시간을 MM:SS 형식으로 변환하여 화면에 표시하는 함수
     * @param {number} seconds 남은 전체 시간 (초 단위)
     */
  function updateTimerDisplay(seconds) {
    const minute = Math.floor(seconds / 60);
    const second = seconds % 60;

    const minuteString = minute < 10 ? '0' + minute : String(minute);
    const secondString = second < 10 ? '0' + second : String(second);

    timerDisplay.textContent = `${minuteString}:${secondString}`;
  }

  /**
   * 랜덤 퀴즈를 화면에 표시하는 함수
   * 
   * - remainingQuizzes 배열에서 문제를 하나 무작위로 선택하여 화면에 표시.
   * - 정답 또는 오답을 클릭하면, 해당 버튼에 스타일을 적용하고 피드백 표시.
   * - 문제를 푼 후 2.5초 뒤 다음 퀴즈가 자동으로 표시.
   */
  function showRandomQuiz() {
    if (remainingQuizzes.length === 0) {
      quizWrapper.innerHTML = `<p>모든 문제를 풀었어요! 👏</p>`;
      return;
    }

    quizFeedback.textContent = '';

    const randomIndex = Math.floor(Math.random() * remainingQuizzes.length);
    const quiz = remainingQuizzes.splice(randomIndex, 1)[0];

    quizQuestion.textContent = quiz.question;
    quizOptions.innerHTML = '';

    quiz.options.forEach(option => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'quiz__option';
      button.textContent = option;
      quizOptions.appendChild(button);

      button.addEventListener('click', () => {
        const allOptions = quizOptions.querySelectorAll('.quiz__option');
        allOptions.forEach(button => button.disabled = true);

        if (option === quiz.correctAnswer) {
          button.classList.add('correct');
          quizFeedback.textContent = '정답입니다! 🎉';
        } else {
          button.classList.add('incorrect');
          quizFeedback.textContent = `오답입니다...😔 정답은 ${quiz.correctAnswer}입니다.`;
        }

        // 정답 버튼에 파란색 표시
        allOptions.forEach(button => {
          if (button.textContent === quiz.correctAnswer) {
            button.classList.add('correct');
          }
        })

        setTimeout(() => {
          showRandomQuiz();
        }, 2500);
      });
    });

    currentAnswer = quiz.correctAnswer;
  }
}