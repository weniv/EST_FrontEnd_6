// Variables

var a = 3;
let b = 12;
const c = 15;

console.log(a);
var a = 5;
b = 5; // let b= 5 는 재선언 불가(let, const 공통), 값을 재할당하는 것은 가능하다.

// c = 5; const는 재할당도 불가.
console.log(a);
console.log(b);
console.log(c);
