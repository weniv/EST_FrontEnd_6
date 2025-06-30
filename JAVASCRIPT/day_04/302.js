const animals = ["puppy", "cat", "parret"];
let result = animals.filter((animal, index) => index > 2);
result = animals.map((animal, index) => index);
console.log(result);

// animals의 마지막요소로 Rabbit을 추가하세요(원본배열을 변경)
// push, pop, unshift, shift
animals.push("Rabbit");
console.log(animals);

// 1~2번째에 있는 요소만 가져오기 -> cat, parret -> slice
const getAnimals = animals.slice(1, 3);
console.log(getAnimals);

// animals = ["puppy", "cat", "parret", "Rabbit"];
animals.splice(1, 2, "Elephant");
console.log("changed Animals : ", animals);
//  [ 'puppy', 'Elephant', 'Rabbit' ]
animals.splice(1, 0, "cat");
console.log(animals);
console.clear();

// reverse() 배열요소를 거꾸로 변경(순번) -> 원본을 변경
const arr = ["apple", "mango", "banana"];
arr.reverse();
console.log(arr);
