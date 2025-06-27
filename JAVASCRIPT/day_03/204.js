const str = "123"; // string -> Number(), parseInt(), parseFloat()
const num = 255; // number -> string

// '123'

console.log(1 + "1"); // 11 -> string
console.log(num + "");

console.log(num.toString());
console.log((123).toString());

const arr = ["a", "b", "c"];
console.log(arr.toString());

console.log(true.toString());

/* object - user 변수에 mbti -> infj // bloodType -> B */
const user = {
  mbti: "INFJ",
};

// 객체를 -> 문자열
console.log(user.toString()); // 객체타입을 문자열로 그대로 반환 object Object
console.log(JSON.stringify(user)); // JSON객체로 객체타입데이터를 문자열로 변환할 수 있다.

console.log(num.toString(16));

// 랜덤한 RGB값을 구해서 -> 16진수로 변환하시오. 0~255 난수(정수)
/* red의 값을 0~255 난수를 구해서, 16진수로 바꾸기 */

/* 랜덤으로 16진수를 만드는 함수가 필요.*/

function getRandomHex() {
  return Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

function createHexValue() {
  return "#" + getRandomHex() + getRandomHex() + getRandomHex();
}

const color1 = createHexValue();
const color2 = createHexValue();

console.log(color1, color2);

console.clear();

const num2 = 123.456789; // 소수점 2자리까지만 출력
const newNum = num2.toFixed(2);

console.log(newNum, typeof newNum, parseFloat(newNum));


