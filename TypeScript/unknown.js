var value2 = 4;
value2 = "hello";
// 타입 검사 없이 사용 불가
// console.log(value2.length); // 에러!
// 타입 검사 후 사용 가능
if (typeof value === "string") {
    console.log(value2.length); // 정상 동작
}
