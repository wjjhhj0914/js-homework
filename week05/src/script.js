{
  // [STEP 01] 시간 선택 버튼 활성화 로직

  // 요소 선택
  const timeOptions = document.querySelector('.time__options');
  const startButton = document.querySelector('.start__button');
  const timeOptionsButtons = document.querySelectorAll('.time__options-button');
  
  // 선택한 시간 저장용 변수
  let selectedTime = null;

  // 클래스 이름 상수 선언
  const ACTIVE_CLASSNAME = 'active';
  const SELECTED_CLASSNAME = 'is-selected';

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
}