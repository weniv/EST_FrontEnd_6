/**
 * Object.assign({}:target, 복제할객체) -> 얕은복사
 *
 */

const user = { name: "Ghost", age: 1000 };
const newUser = Object.assign({ name: "Irangi", bloodType: "B" }, user);

newUser.mbti = "INFJ";
console.log(user, newUser);
console.log(user === newUser); // false

const obj = { name: "Apple" };
obj.name = "Mango";
obj.age = 1000;
console.log(obj);

const user2 = {
  name: "Ghost",
  age: 1000,
  pets: { dog: "Bobby", parret: "Cherry" },
};
// user2를  newUser2로 복사해서, newUser2만 age를 500으로 변경해보세요.
const newUser2 = Object.assign({}, user2);
newUser2.age = 500;
console.log(user2, newUser2);
console.log(user2 === newUser2); // false

newUser2.pets.dog = "Bombi";
console.log(user2.pets.dog, newUser2.pets.dog);
console.log(user2.pets.dog === newUser2.pets.dog); // true

console.clear();

// 깊은복사 JSON 이용
const newUser3 = JSON.parse(JSON.stringify(user2));
console.log(typeof newUser3, newUser3);

newUser3.pets.parret = "Alpha";
console.log(user2.pets.parret, newUser3.pets.parret);
console.log(user2.pets.parret === newUser3.pets.parret); // false
