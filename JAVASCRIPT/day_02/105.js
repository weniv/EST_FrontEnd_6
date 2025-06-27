/**
 * 논리연산자(AND, OR, NOT)
 */

// and -> && -> 모든 값이 true일 때에만 -> true반환
console.log(true && true);
console.log(true && false);
console.log(false && false);

// or -> || -> 하나라도 값이 true이면 -> true 반환
console.log(true || true);
console.log(true || false);
console.log(false || false); // false

// not -> !
console.log(!true);
console.log(!false);
console.log(!!false); // 원래값으로 돌아옴

/**
 * ko = 100, en = 80, math = 50
 * 평균이 70점이상이면 합격, 단 한과목이라도 60점 미만이면 불합격
 */

const ko = 100;
const en = 80;
const math = 70;
const avg = (ko + en + math) / 3;

if (avg >= 70 && ko > 60 && en > 60 && math > 60) {
  console.log("pass");
} else {
  console.log("fail");
}

if (avg <= 70 || ko < 60 || en < 60 || math < 60) {
  console.log("fail");
} else {
  console.log("pass");
}
