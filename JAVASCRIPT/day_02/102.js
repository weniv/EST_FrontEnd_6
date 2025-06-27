/**
 * 비교 연산자는 좌항과 우항의 값을 비교하여 Boolean 값을 반환한다.
 */

let a = 3;
let b = 5;

console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);

let c = "5";

console.log(b == c); // 값만비교
console.log(b === c); // 데이터타입까지 비교
console.log(b !== c); // 데이터타입까지 비교

console.clear();

// 만약에 입력한 값이 3 이라면, '로또당첨', 아니라면 '꽝'
let userNumber = 7;

if (userNumber === 7) {
  // 참이면 실행
  console.log("로또 당첨");
} else {
  // 거짓이면 실행
  console.log("꽝");
}

let number = 5;
// 만약에 number가 짝수라면, '짝수', 홀수라면 '홀수'를 출력하고 싶다.
// 조건식 number % 2 === 0 짝수,(질문)
// const isEven = number % 2 === 0;
const isEven = number % 2;
if (!isEven) {
  console.log("짝수");
} else {
  console.log("홀수");
}

if (0) {
  console.log("참");
} else {
  console.log("거짓");
}
