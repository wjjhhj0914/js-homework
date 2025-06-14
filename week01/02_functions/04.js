/**
 * 4. 할인가 계산
 * - 판매가와 할인 비율(%)을 입력받아, 할인가를 반환하는 함수를 작성합니다.
 * [예: 판매가가 18,700원이고, 할인율이 20%인 경우 계산된 할인가는 14,960원입니다.]
 * 
 * - 함수 이름 : getDiscountedPrice
 * - 매개변수 : originalPrice, discountPercent
 * - 기능 : 판매가에서 할인율을 적용한 할인가를 반환
 * - 반환값 타입 : Number
 */

const getDiscountedPrice = function (originalPrice, discountPercent) {
  let discountRate = (100 - discountPercent) * 0.01;
  return originalPrice * discountRate;
}

console.log(`계산된 할인가는 ${getDiscountedPrice(18700, 20)}원입니다.`);