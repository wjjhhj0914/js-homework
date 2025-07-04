/**
 * 1. 인사말 메시지
 * - 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
 * 
 * - 함수 이름 : greetUser
 * - 매개변수 : username
 * - 기능 : 인사말 메시지 "안녕하세요! {이름}님. 좋은 하루되세요!"를 문자열로 반환
 * - 반환값 타입 : String
 * - 비고 : 함수 선언으로 작성
 */

function greetUser(username) {
  return `안녕하세요! ${username}님. 좋은 하루되세요!`;
}

console.log(greetUser('장효정'));
console.log(greetUser('Charlie'));