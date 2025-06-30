// reduce()
//  ( accumalator  , currentValue)
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((a, c) => a + c, 0);

console.log(total);

const numbers2 = [10, 23, 15, 3, 2, 12, 30, 42, 50];
// 홀수번째 인덱스값만 더한 결과를 출력하시오.(홀수번째 숫자의 합)
const oddNumbers = numbers2.filter((_, i) => i % 2);
const totalSum = oddNumbers.reduce((a, c) => a + c, 0);
console.log(totalSum);
// 1부터 10까지 [1,2,3,4,5,6,7,8,9,10]
const arr = Array(10)
  .fill(0)
  .map((_, i) => i + 1);

console.log(arr);

function sumNumbers(number) {
  const numberArray = Array(number)
    .fill(0)
    .map((_, i) => i + 1);
  const result = numberArray.reduce((a, c) => a + c, 0);
  return result;
}

console.log(sumNumbers(100)); // 1~100까지 더하기한 값
console.log(sumNumbers(50)); // 1~50까지 더하기한 값
