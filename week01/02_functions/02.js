/**
 * 2. 원가 계산
 * - 판매가를 입력받아 원가를 계산하는 함수를 작성합니다.
 * [판매가(세후 금액)에서 원가(세전 금액)를 계산하려면 판매가를 "100% + 세금 비율"로 나눠야 합니다.]
 * 
 * - 함수 이름 : calculateOriginalPrice
 * - 매개변수 : priceWithTax
 * - 기능 : 판매 가격에서 세금을 제외한 원가 반환
 * - 반환값 타입 : Number
 * - 비고 : 함수 표현식으로 작성
 */

const calculateOriginalPrice = function (priceWithTax) {
  return priceWithTax / (1 + 0.033);
}

console.log(calculateOriginalPrice(20_000));