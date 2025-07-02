const students = [
  { name: "Ghost", score: 85 },
  { name: "Camel", score: 92 },
  { name: "Mui", score: 78 },
];

// students data type -> array

console.log(typeof students);
console.log(Array.isArray(students)); // array 인지 확인하는 정적메서드

// 배열에 요소추가 메서드 -> Array.prototype.push(추가할값)
// 학생을 추가, name : 'Shoopa', score: 20
students.push({ name: "Shoppa", score: 20 });
console.log(students);

const arr = [30, 40, 50, 60];
// filter를 이용해서 50점 이상인 값만 배열로 출력
const over50 = arr.filter((data) => data >= 50);
console.log(over50);
console.log(`50이상인 값은, ${over50}`);

// students중에 score가 80점이상인 요소를 배열로 추출
const over80 = students.filter((student) => student.score >= 80);
const over80Names = over80.map((student) => student.name);
console.log(`점수가 80점이상인 학생은 ${over80Names}입니다`);

const numbers = [11, 2, 23, 1, 55];
// 오름차순으로 정렬 1, 2, 11, 23, 55

numbers.sort((a, b) => a - b);
console.log("오름차순정렬 : ", numbers);

// 내림차순으로 55, 23, 11, 2,  1
numbers.sort((a, b) => b - a);
console.log("내림차순정렬 : ", numbers);

// students 성적순으로 정렬(성적이 높은사람이 첫번째에 오도록->내림차순)
const highScores = [...students].sort((a, b) => b.score - a.score);
console.log("highScores : ", highScores);
console.log("afterSort : ", students);

console.clear();

const alphabets = ["banana", "Banana", "apple", "Zebra"];
alphabets.sort((a, b) => a.localeCompare(b));
console.log(alphabets);
alphabets.sort((a, b) => b.localeCompare(a));
console.log(alphabets);
