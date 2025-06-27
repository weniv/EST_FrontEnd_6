// truthy, falsy
/**
 * ' ' 공백이 있는 문자열 -> true
 * '' 공백이 없는 문자열 -> false
 * null -> false
 * undefined -> false
 */

if (null) {
  console.log("true");
} else {
  console.log("false");
}

// 삼항연산자 -> 조건식 ? 참일때 : 거짓일때

null ? console.log("true") : console.log("false");

if (!5 % 2) {
  console.log("even");
} else {
  console.log("odd");
}

// if( 5%2 === 0 )
!5 % 2 ? console.log("even") : console.log("odd");

const result = !5 % 2 ? "even" : "odd";
console.log(result);

// 90점이상 합격 / 미만 불합격 -> if.. else
const score = 90;
if (score >= 90) {
  console.log("pass");
} else {
  console.log("fail");
}

// 90점이상 'A' / 70점 이상 'B' / 70미만 '실패'
if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("fail");
}
