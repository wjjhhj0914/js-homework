/**
 * 5. 등급 판단
 * - 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.
 * 
 * 점수 범위 | 등급(Grade) | 설명
 * 90~100 |     A      | 매우 우수
 * 80~89  |     B      | 우수
 * 70~79  |     C      | 보통
 * 60~69  |     D      | 미달, 통과 기준 근점
 * 0~59   |     F      | 낙제
 * 
 * - 함수가 반환해야 할 결과 값은 아래 포멧(format)입니다.
 * { score: 87, grade: 'B', description: '우수' }
 */

const returnObj = function (userScore) {
  const scoreObj = {
    score: userScore,
    grade: '',
    description: '',
  }
  if (userScore >= 90) {
    scoreObj.grade = 'A';
    scoreObj.description = '매우 우수 🏆';
  } else if (userScore >= 80) {
    scoreObj.grade = 'B';
    scoreObj.description = '우수 👍';
  } else if (userScore >= 70) {
    scoreObj.grade = 'C';
    scoreObj.description = '보통 🙂';
  } else if (userScore >= 60) {
    scoreObj.grade = 'D';
    scoreObj.description = '미달, 통과 기준 근접 😢';
  } else {
    scoreObj.grade = 'F';
    scoreObj.description = '낙제 🤯';
  }
  return scoreObj;
}

console.log(returnObj(59));