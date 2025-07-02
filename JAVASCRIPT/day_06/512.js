// 총점, 평균, 최고점수를 함수에서 구조분해할당으로 받기

function calcScores(scores) {
  const total = scores.reduce((a, c) => a + c, 0);
  const average = Math.floor(total / scores.length);
  const top = Math.max(...scores);
  return [total, average, top];
}

const [total, average, top] = calcScores([100, 50, 25, 32, 70]);
console.log(`점수의 합계는 ${total}, 평균은 ${average}, 1등점수는 ${top}`);
