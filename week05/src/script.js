{
  // 퀴즈 데이터
  const quizData = [
    // 수도 맞추기 퀴즈
    {
      question: '아일랜드의 수도는?',
      options: ['에든버러', '런던', '레이캬비크', '더블린'],
      correctAnswer: '더블린'
    },
    {
      question: '캐나다의 수도는?',
      options: ['벤쿠버', '오타와', '토론토', '몬트리올'],
      correctAnswer: '오타와'
    },
    {
      question: '호주의 수도는?',
      options: ['시드니', '골드코스트', '멜버른', '캔버라'],
      correctAnswer: '캔버라'
    },
    {
      question: '영국의 수도는?',
      options: ['맨체스터', '리버풀', '런던', '버밍엄'],
      correctAnswer: '런던'
    },
    {
      question: '미국의 수도는?',
      options: ['뉴욕', '워싱턴 D.C.', '로스앤젤레스', '캘리포니아'],
      correctAnswer: '워싱턴 D.C.'
    },
    {
      question: '중국의 수도는?',
      options: ['상하이', '항저우', '베이징', '칭다오'],
      correctAnswer: '베이징'
    },
    {
      question: '독일의 수도는?',
      options: ['뮌헨', '프랑크프루트', '베를린', '함부르크'],
      correctAnswer: '베를린'
    },
    {
      question: '스페인의 수도는?',
      options: ['세비야', '바르셀로나', '마드리드', '발렌시아'],
      correctAnswer: '마드리드'
    },
    {
      question: '일본의 수도는?',
      options: ['오키나와', '오사카', '도쿄', '후쿠오카'],
      correctAnswer: '도쿄'
    },
    {
      question: '브라질의 수도는?',
      options: ['리우데자네이루', '상파울루', '브라질리아', '마나우스'],
      correctAnswer: '브라질리아'
    },
    // 개발자 상식 퀴즈
    {
      question: 'HTML에서 시맨틱 태그가 아닌 것은?',
      options: ['section', 'article', 'div', 'header'],
      correctAnswer: 'div'
    },
    {
      question: 'CSS에서 box model에 포함되지 않는 것은?',
      options: ['margin', 'border', 'padding', 'outline'],
      correctAnswer: 'outline'
    },
    {
      question: 'JavaScript에서 ===는 어떤 역할을 할까?',
      options: ['값만 비교', '객체 비교', '배열 비교', '값과 타입 비교'],
      correctAnswer: '값과 타입 비교'
    },
    {
      question: 'React에서 상태 관리를 위한 기본 훅은?',
      options: ['useEvent', 'useState', 'useClass', 'useVar'],
      correctAnswer: 'useState'
    },
    {
      question: 'HTTP 상태 코드 404는 무엇을 의미할까?',
      options: ['요청 성공', '권한 없음', '페이지를 찾을 수 없음', '서버 오류'],
      correctAnswer: '페이지를 찾을 수 없음'
    },
    // 영화 이모지 퀴즈
    {
      question: '🌊🚢💔 이 이모지 조합은 어떤 영화일까?',
      options: ['인셉션', '타이타닉', '아바타', '맘마미아'],
      correctAnswer: '타이타닉'
    },
    {
      question: '🧙🏻‍♀️🪄🏰⚡️ 이 이모지 조합은 어떤 영화일까?',
      options: ['해리포터', '반지의 제왕', '나니아 연대기', '셜록 홈즈'],
      correctAnswer: '해리포터'
    },
    // 명대사 퀴즈
    {
      question: '"I\'ll be back." 이 대사를 남긴 영화는?',
      options: ['엑스맨', '매트릭스', '터미네이터', '로보캅'],
      correctAnswer: '터미네이터'
    },
    {
      question: '"May the Force be with you."는 어떤 영화에서 나온 대사일까?',
      options: ['가디언즈 오브 갤럭시', '스타워즈', '반지의 제왕', '캐리비안의 해적'],
      correctAnswer: '스타워즈'
    },
    {
      question: '"Why so serious?" 이 대사가 등장하는 영화는?',
      options: ['베트맨 비긴즈', '조커', '다크 나이트', '수어사이드 스쿼드'],
      correctAnswer: '다크 나이트'
    },
    // 애니메이션 퀴즈
    {
      question: '영화 "토이스토리"에서 주인공 카우보이 인형의 이름은?',
      options: ['버즈', '마이크 와조스키', '우디', '렉스'],
      correctAnswer: '우디'
    },
    {
      question: '영화 "코코"는 어느 나라 문화를 배경으로 한 애니메이션일까?',
      options: ['프랑스', '이탈리아', '멕시코', '스페인'],
      correctAnswer: '멕시코'
    },
    // 감독 맞추기 퀴즈
    {
      question: '"인셉션", "인터스텔라", "테넷"의 감독은 누구일까?',
      options: ['스티븐 스필버그', '제임스 카메론', '크리스토퍼 놀란', '마틴 스콜세지'],
      correctAnswer: '크리스토퍼 놀란'
    },
    {
      question: '"타이타닉"과 "아바타" 시리즈를 감독한 사람은?',
      options: ['리들리 스콧', '제임스 카메론', '조지 루카스', '론 하워드'],
      correctAnswer: '제임스 카메론'
    },
    // 주연 배우 맞추기 퀴즈
    {
      question: '"해리포터" 시리즈에서 해리 포터를 연기한 배우는?',
      options: ['톰 홀랜드', '다니엘 래드클리프', '엘리야 우드', '루퍼트 그린트'],
      correctAnswer: '다니엘 래드클리프'
    },
    {
      question: '"캐리비안의 해적"에서 잭 스패로우를 연기한 배우는?',
      options: ['브래드 피트', '조니 뎁', '올랜도 블룸', '톰 하디'],
      correctAnswer: '조니 뎁'
    },
    {
      question: '"다크 나이트"에서 조커를 연기한 배우는?',
      options: ['브래드 피트', '호아킨 피닉스', '히스 레저', '톰 하디'],
      correctAnswer: '히스 레저'
    },
    // 영화 OST 퀴즈
    {
      question: '"Falling Slowly"는 어떤 영화의 OST일까?',
      options: ['Once', 'Begin Again', 'La La Land', 'The Greatest Showman'],
      correctAnswer: 'Once'
    },
    {
      question: '"My Heart Will Go On"은 어떤 영화의 주제곡일까?',
      options: ['타이타닉', '러브 액츄얼리', '노트북', '레미제라블'],
      correctAnswer: '타이타닉'
    },
    {
      question: '"City of Stars"는 어떤 영화의 OST일까?',
      options: ['La La Land', 'The Notebook', 'A Star is Born', 'Les Misérables'],
      correctAnswer: 'La La Land'
    },
    // 음악/뮤지션 퀴즈
    {
      question: '비틀즈의 멤버가 아닌 사람은?',
      options: ['존 레논', '폴 메카트니', '프레디 머큐리', '조지 해리슨'],
      correctAnswer: '프레디 머큐리'
    },
    {
      question: '세계적인 EDM 듀오 Daft Punk는 어느 나라 출신일까?',
      options: ['미국', '프랑스', '영국', '독일'],
      correctAnswer: '프랑스'
    },
    {
      question: '세계적인 EDM DJ Avicii는 어느 나라 출신일까?',
      options: ['프랑스', '노르웨이', '독일', '스웨덴'],
      correctAnswer: '스웨덴'
    },
    {
      question: '세계적인 EDM 듀오 Daft Punk는 어느 나라 출신일까?',
      options: ['미국', '프랑스', '영국', '독일'],
      correctAnswer: '프랑스'
    },
    {
      question: '영화 "보헤미안 랩소디"는 어떤 밴드의 이야기를 다룰까?',
      options: ['Queen', 'the Beatles', 'Pink Floyd', 'Coldplay'],
      correctAnswer: 'Queen'
    },
    {
      question: '다음 중 영국 출신 밴드는?',
      options: ['Imagin Dragons', 'Maronn 5', 'Coldplay', 'OneRepublic'],
      correctAnswer: 'Coldplay'
    },
    {
      question: '"Smells Like Teen Spirit"로 유명한 록 밴드는?',
      options: ['Linkin Park', 'Oasis', 'Nirvana', 'Radiohead'],
      correctAnswer: 'Nirvana'
    },
    {
      question: '다음 중 U2의 리드 보컬 이름은?',
      options: ['Bono', 'Chris Martin', 'Liam Gallagher', 'Sting'],
      correctAnswer: 'Bono'
    },
    {
      question: '"Don\'t Look Back in Anger"는 어떤 밴드의 노래일까?',
      options: ['Blur', 'Oasis', 'Arctic Monkeys', 'Pink Floyd'],
      correctAnswer: 'Oasis'
    },
    {
      question: '밴드 "Radiohead"의 대표곡이 아닌 것은?',
      options: ['Creep', 'Fix You', 'Karma Police', 'No Surpries'],
      correctAnswer: 'Fix You'
    },
    // 가사 빈간 채우기 퀴즈
    {
      question: '🎤 "Is this the real life? Is this just ______?',
      options: ['fantasy', 'illusion', 'magin', 'dream'],
      correctAnswer: 'fantasy'
    },
    {
      question: '🎤 "Hey Jude, don’t make it ______."',
      options: ['bad', 'good', 'happy', 'great'],
      correctAnswer: 'bad'
    },
    {
      question: '🎤 "Billie Jean is not my ______."',
      options: ['lover', 'friend', 'girl', 'wife'],
      correctAnswer: 'lover'
    },
    {
      question: '🎤 "When I find myself in times of trouble, Mother Mary comes to me, speaking words of ______."',
      options: ['love', 'wisdom', 'truth', 'hope'],
      correctAnswer: 'wisdom'
    },
    {
      question: '🎤 "Sweet Caroline~ ♪ Good times never seemed so ______."',
      options: ['good', 'fine', 'true', 'real'],
      correctAnswer: 'good'
    },
    // 상식 퀴즈
    {
      question: '1년은 며칠일까?',
      options: ['360일', '365일', '368일', '265일'],
      correctAnswer: '365일'
    },
    {
      question: '사과가 떨어져 만유인력을 발견한 과학자는?',
      options: ['아인슈타인', '뉴턴', '갈릴레이', '다윈'],
      correctAnswer: '뉴턴'
    },
    {
      question: '컴퓨터의 0과 1로 이루어진 언어를 뭐라고 할까?',
      options: ['영어', '이진법', '삼진법', '코딩법'],
      correctAnswer: '이진법'
    },
    // 축구 퀴즈
    {
      question: '2022 FIFA 월드컵 우승 국가는?',
      options: ['프랑스', '브라질', '아르헨티나', '독일'],
      correctAnswer: '아르헨티나'
    },
    {
      question: '리오넬 메시가 2023년까지 가장 오래 소속된 클럽은?',
      options: ['레알 마드리드', '맨체스터 시티', '바르셀로나', '인터 마이애미'],
      correctAnswer: '바르셀로나'
    },
    {
      question: '손흥민이 현재 소속된 프리미어리그 구단은?',
      options: ['첼시', '리버풀', '토트넘 홋스퍼', '아스날'],
      correctAnswer: '토트넘 홋스퍼'
    },
    {
      question: '크리스티아누 호날두는 어느 나라 출신일까?',
      options: ['스페인', '브라질', '포르투갈', '이탈리아'],
      correctAnswer: '포르투갈'
    },
    {
      question: '첼시의 홈구장은?',
      options: ['Etihad Stadium', 'Stamford Bridge', 'Anfield', 'Old Trafford'],
      correctAnswer: 'Stamford Bridge'
    },
    {
      question: '한국 축구 국가대표팀의 별명은?',
      options: ['블루 드래곤즈', '레드 타이거즈', '태극전사', '코리안 피닉스'],
      correctAnswer: '태극전사'
    },
  ];

  const timeOptions = document.querySelector('.time__options');
  const startButton = document.querySelector('.start__button');
  const timeOptionsButtons = document.querySelectorAll('.time__options-button');

  const homeScreen = document.querySelector('.screen__home');
  const timerScreen = document.querySelector('.screen__timer');

  const timerDisplay = timerScreen.querySelector('.timer__time');

  // 퀴즈 관련 요소 선택
  const quizWrapper = timerScreen.querySelector('.quiz__wrapper');
  const quizQuestion = quizWrapper.querySelector('.quiz__question');
  const quizOptions = quizWrapper.querySelector('.quiz__options');
  const quizFeedback = quizWrapper.querySelector('.quiz__feedback');

  const ACTIVE_CLASSNAME = 'active';
  const SELECTED_CLASSNAME = 'is-selected';
  const HIDDEN_CLASSNAME = 'is-hidden';
  const VISIBLE_CLASSNAME = 'is-visible';

  let selectedTime = null;
  let remainingSeconds = 0;

  // 현재 퀴즈 정답 저장용 변수
  let currentAnswer = '';

  let remainingQuizzes = [];

  timeOptions.addEventListener('click', (e) => {
    const userClick = e.target;
    
    if (!userClick.classList.contains('time__options-button')) return;

    timeOptionsButtons.forEach(button => {
      button.classList.remove(SELECTED_CLASSNAME);
    });

    userClick.classList.add(SELECTED_CLASSNAME);

    selectedTime = parseInt(userClick.dataset.time, 10);

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
    
    remainingQuizzes = [...quizData]; // 문제 배열 복사
    showRandomQuiz();

    const countdown = setInterval(() => {
      remainingSeconds--;
      updateTimerDisplay(remainingSeconds);

      if (remainingSeconds <= 0) {
        clearInterval(countdown);
        timerDisplay.textContent = '00:00';
        quizWrapper.innerHTML = `<p>⏳ 시간이 다 되었어요!</p>`;
      }
    }, 1000);
  })

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

  // 퀴즈 표시 함수
  function showRandomQuiz() {
    quizFeedback.textContent = '';

    const randomIndex = Math.floor(Math.random() * remainingQuizzes.length);
    // 출제된 문제 제거
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
        }, 3000);
      })
    });

    currentAnswer = quiz.correctAnswer;
  }


}