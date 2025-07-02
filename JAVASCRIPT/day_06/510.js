/**
 * 구조분해할당(Destructuring)
 */

const animals = ["puppy", "cat", "parret", "lion", "tiger", "duck", "panda"];
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = animals;

console.log(rest);

/* animals, numbers 합친 새로운 배열을 만드세요 */
const newArray = [...animals, ...numbers];
console.log(newArray); // ['puppy','cat',.....1,2,3,4,5]

const array2 = ["apple", "mango", "banana"];

const [fruit1, fruit2] = array2; // 이 배열에서 앞에서 2개를 해당변수로 가져오겠다.
console.log(fruit1, fruit2);

console.clear();

const array = calc(10, 2); // [ 12, 5]
console.log(array);

// 함수
function calc(a, b) {
  return [a + b, a / b];
}

const [sum, div, multiply = "No multiply", diff] = calc(15, 3);
console.log(sum, div, multiply, diff);
