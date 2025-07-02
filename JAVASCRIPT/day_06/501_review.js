const person = { name: "Ghost", age: 20 };

console.log(person.name);

person.height = 180;
console.log(person);

// for...of문으로 문자열 배열을 모두 소문자로 변환해 새 배열로 만드세요.
const arr = ["A", "B", "C"];

let result = [];
for (const x of arr) {
  result.push(x.toLowerCase());
}

console.log(result);

arr.forEach((x) => {
  result.push(x.toLowerCase());
});

console.log(result);
