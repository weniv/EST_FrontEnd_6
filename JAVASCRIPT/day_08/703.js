// 1) 1초에 한번씩 hello 찍기
// setInterval(() => console.log("hello"), 1000);

// 2) 현재시각 3초에 한번씩 시간보여주기
// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleDateString());
// setInterval( () => console.log(new Date().toLocaleTimeString()), 3000)

// 3) 0.5초마다 카운트 증가 : 출력결과 ->  Count 1 -> Count 2 -> Count 3
// let count = 0;
// setInterval( () => console.log(`Count : ${count++}`), 500)

// 4) 1초마다 배열에 있는것을 순서대로 출력
const news = [
  "코딩수업 마지막날",
  "Javascript 최고",
  "그동안 즐거웠다",
  "끝까지 버티기",
];
let index = 0;
// setInterval(() => {
//   console.log(`${index} : ${news[index]}`);
//   index = (index + 1) % news.length;
// }, 1000);

// 1초에 한번씩 Hello가 찍히다가, 3초후에는 멈추기
// setInterval, setTimeout -> 취소할때 clearInterval(setInterval변수), clearTimeout(setTimeout변수)

// const printHello = setInterval(() => console.log("Hello"), 1000);
// setTimeout(() => clearInterval(printHello), 3000);

// 1초마다 1~5까지 출력한 후에 멈추기 -> count 변수 감시..

let count = 1;
const printCount = setInterval(() => {
  console.log(count);
  if (count === 5) clearInterval(printCount);
  count++;
}, 1000);
