// 함수선언식 : sum -> function 함수이름(매개변수) {}
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 5)); // 결과가 리턴 -> '두 수의 합은 8입니다'

// 함수표현식(function 키워드) const 변수 = function (매개변수) { }

const sayHello = function (name) {
  return `Hello ${name}`;
};

console.log(sayHello("Ghost")); // Hello Ghost가 출력

// 함수표현식(화살표함수) const 변수 = (매개변수) => {}

const getBigNumber = (numbers) => {
  return `${Math.max(...numbers)} is a Big number`;
};

console.log(getBigNumber([3, 5, 10, 12])); // 가장큰수를 리턴하는 함수 -> '12가 가장 큰 수입니다.'
