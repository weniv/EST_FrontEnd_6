// TODO2-1: 기본 계산 함수들을 import 하세요

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultText = document.getElementById("result");
const upgradeBtn = document.getElementById("upgrade-btn");

// TODO2-2: 기본 계산기 이벤트 리스너를 추가하세요
document.getElementById("add").addEventListener("click", () => {});

document.getElementById("subtract").addEventListener("click", () => {});

document.getElementById("multiply").addEventListener("click", () => {});

document.getElementById("divide").addEventListener("click", () => {});

// TODO2-3: 계산기 실행 함수를 완성하세요
function calculator(operation) {
  try {
    // [입력값]
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // 입력값에 대한 유효성 검사를 작성하세요
    // [계산 결과]
    // const result = ?;
    // 계산 결과 유효성 검사를 작성하세요
    // 결과를 화면에 표시하세요
  } catch (error) {
    // 에러 메시지를 콘솔 및 화면에 출력하세요
  }
}

// ========== Advanced Calculator 기능 ==========

// TODO5-1: 업그레이드 버튼 이벤트 리스너를 추가하세요
upgradeBtn.addEventListener("click", () => {
  // TODO5-2: 사용자 상태를 변경하세요

  // TODO5-3: userState를 확인하여 고급 기능을 활성화하세요
  if (userState) {
    try {
      // 동적 import로 advance.js 모듈을 로드하세요

      // 고급 계산기 이벤트 리스너를 추가하세요
      document.getElementById("power").addEventListener("click", () => {});

      document.getElementById("squareRoot").addEventListener("click", () => {});

      // UI를 변경하여 고급 계산기를 표시하고, 고급 기능이 활성화 메시지를 화면에 출력하세요
    } catch (error) {
      // 에러 메시지를 콘솔 및 화면에 출력하세요
    }
  } else {
    // 권한이 없는 경우 "고급 계산기 사용 권한이 없습니다." 메시지를 화면에 출력해주세요.
  }
});
