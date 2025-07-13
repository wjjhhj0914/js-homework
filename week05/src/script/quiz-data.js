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
  // 산수 퀴즈
  {
    question: '12 x 8 ÷ 4 = ?',
    options: ['24', '96', '32', '48'],
    correctAnswer: '24'
  },
  {
    question: '(15 + 5) x 2 - 10 = ?',
    options: ['20', '30', '40', '50'],
    correctAnswer: '30'
  },
  {
    question: '37 + 48 = ?',
    options: ['85', '75', '95', '88'],
    correctAnswer: '85'
  },
  {
    question: '120 ÷ 8 = ?',
    options: ['16', '14', '15', '12'],
    correctAnswer: '15'
  },
  {
    question: '3² × 4 = ?',
    options: ['36', '24', '12', '28'],
    correctAnswer: '36'
  },
  {
    question: '(5 + 3) × 6 = ?',
    options: ['48', '50', '42', '36'],
    correctAnswer: '48'
  },
  {
    question: '7 × 8 + 12 = ?',
    options: ['68', '70', '56', '60'],
    correctAnswer: '68'
  },
  {
    question: '144 ÷ 12 = ?',
    options: ['12', '11', '13', '10'],
    correctAnswer: '12'
  },
  // 한국사 퀴즈
  {
    question: '광복절은 몇 월 며칠일까?',
    options: ['08월 15일', '03월 01일', '06월 06일', '10월 03일'],
    correctAnswer: '08월 15일'
  },
  {
    question: '삼국 중 가장 먼저 멸망한 나라는?',
    options: ['고구려', '백제', '신라', '가야'],
    correctAnswer: '백제'
  },
  {
    question: '세종대왕은 어느 왕조의 왕일까?',
    options: ['고려', '조선', '신라', '대한제국'],
    correctAnswer: '조선'
  },
  {
    question: '한글은 언제 창제되었을까?',
    options: ['1443년', '1392년', '1500년', '1592년'],
    correctAnswer: '1443년'
  },
  {
    question: '조선의 마지막 왕은 누구일까?',
    options: ['고종', '순종', '영조', '정조'],
    correctAnswer: '순종'
  },
  // 세계사 퀴즈
  {
    question: '프랑스 혁명은 몇 년에 시작되었을까?',
    options: ['1776년', '1789년', '1804년', '1812년'],
    correctAnswer: '1789년'
  },
  {
    question: '제1차 세계대전은 어느 해에 시작되었을까?',
    options: ['1914년', '1939년', '1920년', '1905년'],
    correctAnswer: '1914년'
  },
  {
    question: '콜럼버스가 아메리카 대륙에 도착한 해는?',
    options: ['1492년', '1500년', '1453년', '1517년'],
    correctAnswer: '1492년'
  },
  {
    question: '2차 세계대전 종전 해는?',
    options: ['1940년', '1943년', '1945년', '1950년'],
    correctAnswer: '1945년'
  },
  {
    question: '로마 제국의 수도는?',
    options: ['아테네', '로마', '이스탄불', '파리'],
    correctAnswer: '로마'
  },
  // 문학 작가 퀴즈
  {
    question: '「1984」를 쓴 작가는 누구일까요?',
    options: ['조지 오웰', '헬만 헤세', '프란츠 카프카', '레프 톨스토이'],
    correctAnswer: '조지 오웰'
  },
  {
    question: '「노인과 바다」의 저자는?',
    options: ['어니스트 헤밍웨이', '윌리엄 포크너', '마크 트웨인', '피츠제럴드'],
    correctAnswer: '어니스트 헤밍웨이'
  },
  {
    question: '「데미안」을 쓴 작가는?',
    options: ['헬만 헤세', '프란츠 카프카', '괴테', '토마스 만'],
    correctAnswer: '헬만 헤세'
  },
  {
    question: '「동물농장」은 어떤 작가의 작품일까?',
    options: ['조지 오웰', '도스토옙스키', '제인 오스틴', '찰스 디킨스'],
    correctAnswer: '조지 오웰'
  },
  {
    question: '「죄와 벌」의 작가는 누구일까?',
    options: ['도스토옙스키', '톨스토이', '체호프', '고리키'],
    correctAnswer: '도스토옙스키'
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
    options: ['Imagin Dragons', 'Maroon 5', 'Coldplay', 'OneRepublic'],
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