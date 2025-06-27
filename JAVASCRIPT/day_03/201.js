/**
 * Review 01 )
 * num -> -13 이 숫자가 10이상인지를 판별해서 '10이상이다', '10이하이다' 출력(조건, 절대값으로 비교)
 *
 * */
const num1 = -13;
let result = Math.abs(num1) >= 10 ? "10이상" : "10이하";
console.log(result);

/**
 * Review 02)
 * 숫자를 반올림해서 짝수/홀수 구분하여 찍기
 */

const num2 = 4.6; // 5
result = Math.round(num2) % 2 === 0 ? "짝수" : "홀수";
console.log(result);
// 코드작성

/**
 * Review 03)
 * 난수를 발생(1~100사이의 수)해서 50이상인지, 미만인지 구분하여 찍기
 *
 */

const randomNumber = Math.floor(Math.random() * 100 + 1);
if (randomNumber >= 50) {
  console.log("50이상");
} else {
  console.log("50이하");
}

/**
 * Review 04)
 * 숫자를 3제곱한 수를 구하시오
 */

const num3 = 2;
result = Math.pow(2, 3); // 2**3
console.log(result);

const str = "5.45"; // 숫자데이터
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(parseInt("50px"));
console.log(Number("50px"));

console.log(isNaN("hello")); // 'hello' is Not a Number -> True
console.log(isNaN(333)); // 333 is Not a Number -> False

/**
 * Review 05)
 * 숫자가 3개, 가장큰값과 가장작은값을 구하시오. max, min
 */

const a = 3,
  b = 10,
  c = 5;
console.log(`가장 큰 수는 ${Math.max(a, b, c)}`);
console.log(`가장 작은 수는 ${Math.min(a, b, c)}`);

const arr = ["가위", "바위", "보"];
console.log(arr.length);
console.log(arr[arr.length - 1]);
console.log(arr.at(-2));

/**
 * Review 06)
 * sum이라는 함수를 만드시오(숫자를 2개를 받아서(출입문 2개 -> 파라미터 2개) 더한값을 출력하는 기계)
 * function 함수이름(파라미터, 파라미터,.....) { 실행문 } -> 함수선언식(선언적함수)
 */

function sum(num1, num2) {
  return num1 + num2;
}

result = sum(3, 4);
console.log(result);
