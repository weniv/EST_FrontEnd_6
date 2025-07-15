// TODO4: 제곱, n제곱근 함수를 구현하세요

// 제곱 함수
export function power(a, b) {
  // TODO4-1: a의 b제곱을 계산하는 로직을 작성하세요
  return a ** b;
}

// n제곱근 함수
export function squareRoot(a, b) {
  // TODO4-2: a의 b제곱근을 계산하는 로직을 작성하세요
  if (a < 0) {
    throw new Error(
      "음수의 제곱근은 복소수가 되므로 이 계산기에서는 지원하지 않습니다."
    );
  }
  // 음수의 제곱근 => 복소수
  // JS에서는 지원하지 않은 수, 별도의 라이브러리 필요.
  if (b === 0) {
    throw new Error("0제곱근은 정의되지 않습니다.");
  }
  return a ** (1 / b);
}
