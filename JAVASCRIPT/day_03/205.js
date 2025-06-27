/**
 * Array.prototype.method
 */

const fruits = ["apple", "mango", "banana"];

// 추가
fruits.unshift("watermelon", "lemon");
fruits.push("Grape");

console.log(fruits);

// 삭제 ,shift, pop
fruits.pop(); // 맨뒤의 요소 하나 삭제
console.log(fruits);
fruits.pop(); // 맨뒤의 요소 하나 삭제
console.log(fruits);
fruits.shift();
console.log(fruits); // 맨 앞의 요소 하나 삭제 lemon, apple, mango

const newFruits = fruits.slice(1, 2);
console.log(newFruits);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const newArr = arr1.concat(arr2);
const newArr = [...arr1, ...arr2];
console.log(newArr);

const whosBig = Math.max(...arr1); // spread 연산자(전개)
console.log(whosBig);

const str = "Ghost,World,Sunny";
// [ 'Ghost','World','Sunny'] -> names 변수에 배열로 넣기
const names = str.split(",");
const newStr = names.join("❤️‍🩹");
console.log(newStr);

const newStr2 = [...str];
console.log(newStr2);
console.clear();

// String.prototype.includes('World')
const users = "hello world"; // w 찾기 indexOf
console.log(users.indexOf("w"));

// Array.prototype.includes('cat')
const animals = ["puppy", "cat", "parrot", "cat"]; // cat 찾기 indexOf
console.log(animals.indexOf("cat"));
console.log(animals.lastIndexOf("cat"));
console.log(animals.includes("cat")); // Boolean 값을 반환
