// computed property
const blood = "bloodType";
const user = {
  name: "Ghost",
  [blood]: "B",
  [3 + 5]: 8,
  ["best" + "Friend"]: "Irangi",
};

console.log(blood, user.bloodType);

console.log(user[8]); // user.8 은 지정불가(숫자가 키값이 될 수 없다)
console.log(user["8"]);
console.log(user.bestFriend);
