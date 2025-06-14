/**
 * 3. 주류 판매 가능 여부
 * - 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.
 * [19세 이상 주류 구매가 가능합니다.]
 * 
 * - 함수 이름 : canSellAlcohol
 * - 매개변수 : registrationCard
 * - 기능 : 신분증의 나이를 확인해 주류 판매 가능 여부를 불리언 타입으로 반환
 * - 반환값 타입 : Boolean
 * - 비고 : 화살표 함수 표현식으로 작성
 * 
 * - 객체 이름 : registrationCard
 * - 속성 : 이름(name)
 * - 속성 : 나이(age)
 * - 속성 : 성별(gender)
 */

// 신분증 객체
const registrationCard = {
  name: '짐 캐리',
  age: 18,
  gender: 'male',
}

// 화살표 함수
const canSellAlcohol = registrationCard => registrationCard.age >= 19;

// 반환값 Boolean 타입
console.log(canSellAlcohol(registrationCard));

// 추가로 작성해본 함수
const calcAge = function (registrationCard) {
  if (canSellAlcohol(registrationCard)) {
    console.log(`${registrationCard.name}님은 주류 구매가 가능합니다! 🍻`);
  } else {
    console.log(`${registrationCard.name}님은 주류를 구매할 수 없습니다.. 😢`);
  }
}

calcAge(registrationCard);