{
  // 요소 선택
  // 시간 선택 관련 (8분, 10분, 12분)
  const timeOptions = document.querySelector('.time__options');
  const startButton = document.querySelector('.start__button');
  const timeOptionsButtons = document.querySelectorAll('.time__options-button');

  // 화면 전환을 위한 화면 요소 선택
  const homeScreen = document.querySelector('.screen__home');
  const timerScreen = document.querySelector('.screen__timer');

  // 시간 표시 영역 요소 선택
  const timerDisplay = timerScreen.querySelector('.timer__time');

  // 클래스 이름 상수 선언
  const ACTIVE_CLASSNAME = 'active';
  const SELECTED_CLASSNAME = 'is-selected';
  const HIDDEN_CLASSNAME = 'is-hidden';
  const VISIBLE_CLASSNAME = 'is-visible';

  // 선택한 시간 저장용 변수
  let selectedTime = null;

  // 남은 초 저장용 변수
  let remainingSeconds = 0;

  // [STEP 01] 시간 선택 버튼 활성화 로직
  // 이벤트 위임
  timeOptions.addEventListener('click', (e) => {
    const userClick = e.target;
    
    // 시간 선택 버튼이 아닌 요소 클릭 시 무시 (빠른 반환)
    if (!userClick.classList.contains('time__options-button')) return;

    // 기존 선택 해제
    timeOptionsButtons.forEach(button => {
      button.classList.remove(SELECTED_CLASSNAME);
    });

    // 새로 클릭된 버튼에 클래스 추가
    userClick.classList.add(SELECTED_CLASSNAME);

    // 선택한 시간 숫자로 변환한 후 저장
    selectedTime = parseInt(userClick.dataset.time, 10);

    // 시작 버튼 활성화
    startButton.disabled = false;
    startButton.classList.add(ACTIVE_CLASSNAME);
  })

  // [STEP 02] '타이머 시작' 버튼 클릭 시 타이머 화면으로 전환 및 타이머 시작
  startButton.addEventListener('click', () => {
    // 선택한 시간이 없으면 중단
    if (!selectedTime) return;

    // 홈 화면 숨기고, 타이머 화면 보이기
    homeScreen.classList.remove(VISIBLE_CLASSNAME);
    homeScreen.classList.add(HIDDEN_CLASSNAME);
    timerScreen.classList.remove(HIDDEN_CLASSNAME);
    timerScreen.classList.add(VISIBLE_CLASSNAME);

    // 남은 시간 = 선택한 분 x 60초
    remainingSeconds = selectedTime * 60;

    /**
     * 남은 시간을 MM:SS 형식으로 변환하여 화면에 표시하는 함수
     * @param {number} seconds 남은 전체 시간 (초 단위)
     */
    function updateTimerDisplay(seconds) {
      const minute = Math.floor(seconds / 60); // 예: 600초 -> 10분
      const second = seconds % 60; // 예: 605초 -> 5초

      // 분/초가 10보다 작으면, 앞에 0 삽입
      // 10보다 작지 않으면, 분/초 표시
      const minuteString = minute < 10 ? '0' + minute : String(minute);
      const secondString = second < 10 ? '0' + second : String(second);

      // DOM 렌더링
      timerDisplay.textContent = `${minuteString}:${secondString}`;
    }

    // 타이머가 시작되자마자 현재 남은 시간을 화면에 최초 1회 표시
    updateTimerDisplay(remainingSeconds);
    
    // 1초마다 실행되는 타이머 함수 설정
    const countdown = setInterval(() => {
      // 1초씩 감소
      remainingSeconds--;
      // 감소된 시간으로 화면에 다시 표시 (실시간 갱신)
      updateTimerDisplay(remainingSeconds);

      // 만약 남은 시간이 0초 이하라면?
      if (remainingSeconds <= 0) {
        // sestInterval 멈춤
        clearInterval(countdown);

        console.log('All set!');
      }
    }, 1000); // 1초 간격으로 실행
  })
}