const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.clear();

const nums = [1, 2, 3, 4, 5];
// 3이라면 찍지말기
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 3) continue;
  console.log(nums[i]);
}

let result = [];
// for문을 이용해서, nums의 배열요소를 모두 result로 넣을건데, 홀수번째만 넣기
// continue 키워드 사용해서 해보기.
// result = [1,3,5]
for (let i = 0; i < nums.length; i++) {
  if (i % 2) continue;
  result.push(nums[i]);
}

console.log(result);
