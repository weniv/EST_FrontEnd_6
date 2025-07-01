// friend 1, friend2 ,friend3
// name, age, mbti

const friend1 = { name: "Ghost", age: 1000, mbti: "INFJ" };
const friend2 = { name: "Irangi", age: 100, mbti: "ENFJ" };
const friend3 = { name: "Shoopa", age: 30, mbti: "ISTP" };

const friends = [friend1, friend2, friend3];
console.log(friends);

const drinkMenu = {
  americano: 2500,
  latte: 3500,
};

const cupSize = {
  small: 0,
  medium: 1000,
  large: 2000,
};

const orderMenu = "americano";
const orderSize = "medium";
const orderCount = 3;

console.log((drinkMenu[orderMenu] + cupSize[orderSize]) * 3);
