// function

console.log(sum(3, 4));
console.log(evenCheck(3));

// 선언적함수, 함수선언식
function sum(a, b) {
  return a + b;
}

// 함수표현식 1
const evenCheck = function (number) {
  return number % 2 ? "홀수" : "짝수";
};

// 함수표현식 2 -> 화살표함수 사용
const sum2 = (a, b) => {
  return a + b;
};
const sum3 = (a, b) =>  a + b;
;

function getRandom(value) {
  return Math.floor(Math.random() * value + 1);
}
