// for (초기화 ; 조건식 ; 증감식) {
//   // 코드
// }

const users = ["Daniel", "Don", "donald", "Micheal", "Juliet"];
for (let i = 0; i < users.length; i++) {
  console.log(`Hello, ${users[i]}.`);
}

// 1부터 10까지 더한 합을 구하는 코드
let sum = 0;
for (let i = 1; i <= 10; i++) {
  // sum = sum + i
  sum += i;
}

console.log(sum);

// 1부터 20까지 출력 -> 짝수만 출력
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// 구구단출력(5단)
// 5 * 1 = 5
// 5 * 2 = 10
// ....
// 5 * 9 = 45

let dan = 5;
for (let i = 1; i <= 9; i++) {
  console.log(`${dan} * ${i} = ${dan * i}`);
}

for (let i = 2; i <= 9; i++) {
  console.log(`------${i}단-------`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
