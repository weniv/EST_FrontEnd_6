/**
 * Object.keys(obj) / Object.values(obj)
 * 객체의 키를 배열로 반환 / 객체의 값을 배열로 반환
 */

const person = { name: "Ghost", age: 1000, mbti: "INFJ" };

console.log(Object.keys(person));
console.log(Object.values(person));

/**
 * Object.entries(obj)
 * 객체의 키, 값을 배열로 반환
 */

console.log(Object.entries(person));

const user = {
  name: "Ghost",
  age: 1000,
};

/* user key, value, [key,value] */
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
