/**
 * 'key' in 객체
 * 해당 key가 객체에 있는지 존재여부를 Boolean으로 출력
 */
const user = {
  name: "Ghost",
  age: 1000,
};

console.log("name" in user);
console.log("color" in user);

/**
 * for..in 객체를 순회하면 key값을 출력한다.(배열에서는 index값을 출력하며, 잘 사용하지않는다.)
 */
const arr = ["a", "b", "c"];
for (const idx in arr) {
  console.log("array : ", idx);
}

for (const key in user) {
  console.log("object : ", key, user[key]);
}

const friend1 = {
  name: "Ghost",
  age: 1000,
  skills: "fly",
};
const friend2 = {
  name: "Irangi",
  age: 500,
};

//friend1, friend2에 skills 값이 있는지 확인
console.log("skills" in friend1); // true
console.log("skills" in friend2); // false

// for..in -> for( 변수선언 in 오브젝트) { 변수값이 'key'  }
for (const key in friend1) {
  console.log(key, friend1[key]);
}

// Object Quiz
const person = { name: "Ghost", age: 20 };
// delete person.age;

for (const key in person) {
  console.log(key);
}
console.log(person);
