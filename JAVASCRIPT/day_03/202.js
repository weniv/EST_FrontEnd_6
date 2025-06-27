const str = "Hello World";
console.log(str.length);

console.log(str.indexOf("L"));
console.log(str.lastIndexOf("l"));

const email = "ghost@gmail.com";
/* 코드작성 - 1. ghost 만 출력하기 slice */
const userName = email.slice(0, 5);
console.log(userName); // ghost

/* 2. email에서 @ -> 문자열의 위치 찾기 -> indexOf */
console.log(email.indexOf("@"));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const str2 = "A.B.C";
const newStr = str2.split("."); // ['A','B','C']
console.log(newStr);

// 사용자이메일에서 도메인만 출력하기 -> gmail.com
// 1. split으로 나누기
// 2. 도메인주소요소에 접근해서 출력하기

const url1 = "http://www.ghost.com/about";
const url2 = "http://www.ghost.com/contactUs";

/* 각 URL의 접근페이지명을 출력하시오 */
const page1 = url1.split("/");

console.log(page1.at(-1));
console.log(page1[page1.length - 1]);
console.log(url1.slice(url1.lastIndexOf("/") + 1));

console.clear();
const str3 = "    hello     world      ";
console.log(str3.trimStart(), "-"); // 앞쪽의 공백 모두 제거
console.log(str3.trimEnd(), "-"); // 뒤쪽의 공백 모두 제거
console.log(str3.trim(), "-"); // 양쪽의 공백 모두 제거

const star = "*";
console.log(star.repeat(5));

console.log(str.replace("H", "W"), str);

const num = "7"; // 007
const num2 = "27"; // 027
console.log(num.padStart(3, "0")); // 3자리로 나타낼건데, 앞이 비었다면 '0'으로 채워줘
console.log(num2.padStart(3, "0")); // 3자리로 나타낼건데, 앞이 비었다면 '0'으로 채워줘

console.log(num.padEnd(5, "0"));
console.log(num2.padEnd(5, "0"));

/* 천원단위로 금액을 입력받았을때 */
const coin = "3200"; // 3200000 삼백이십만원
const cost = "1000";
console.log(coin.padEnd(7, "0"));

/* coin 입력, cost 뺀 나머지금액만 지원을 받을 수 있을때에, 최종 지원금액은 얼마인가요? */
const supportCash = (Number(coin) - Number(cost)) * 1000;
console.log(`${supportCash}를 지원받을 수 있습니다.`);
