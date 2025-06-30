// HTTP -> 200, 404, 500, 알수없는 에러
const statusCode = undefined;
switch (statusCode) {
  case 200:
    console.log("성공입니다.");
    break;
  case 404:
    console.log("페이지를 찾을 수 없습니다.");
    break;
  case 500:
    console.log("서버 오류입니다.");
    break;
  default:
    console.log("알수없는 오류입니다.");
}

// 유저의 Role을 판단해서 출력하는 구문을 만드시오
// admin->'관리자님 안녕하세요', user -> '회원님 안녕하세요', guest ->'게스트 화면입니다'
// 그외의 경우에는 '페이지를 보는 권한이 없습니다'
const userRole = "admin"; // user,guest, ---
switch (userRole) {
  case "admin":
    console.log("관리자님 안녕하세요");
    break;
  case "user":
    console.log("user 안녕하세요");
    break;
  case "guest":
    console.log("guest 안녕하세요");
    break;
  default:
    console.log("페이지를 보는 권한이 없습니다.");
}

// Date객체
let weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednseday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date(); //2025-06-30T04:26:04.410Z
console.log(today.toISOString().split("T")[0]);

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const date = String(today.getDate()).padStart(2, "0");
const day = weeks[today.getDay()]; //요일 0~6, 0-> 일요일, 6->토요일

console.log(`${year}-${month}-${date}, ${day}`); // 2025-5-30, 1
// -> 2025-06-30

// String(123) -> '123'
// (123).toString() -> '123'

// day와 switch문을 이용해서 오늘의 요일을 문자열로 출력하시오. 'Sunday', 'Monday',...
// Today is Monday.

let week;
switch (day) {
  case 0:
    week = "Sunday";
    break;
  case 1:
    week = "Monday";
    break;
}

console.log(`Today is ${week}.`);
console.clear();
const hours = today.getHours(); // 0~23 -> 0~12 am, 13~0 -> pm
const minutes = String(today.getMinutes()).padStart(2, "0");

// 1차) 14:08 pm 삼항연산자
const amPm = hours >= 12 ? "PM" : "AM";
/* hours >=12 이면, 오후, 아니면 오전 */
const hours12 = String(hours % 12 || 12).padStart(2, "0");

console.log(`${hours}:${minutes}`); // 24시간제 출력
console.log(`${hours12}:${minutes} ${amPm}`); // 12시간제 출력
