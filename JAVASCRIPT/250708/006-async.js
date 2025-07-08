// 1. 동기: 순차적 처리
console.log("==== 동기 ====");
console.log(1);
console.log(2);
console.log(3);

// 2. 비동기: 작업이 끝나기를 기다리지 않고 다음 시작
console.log("==== 비동기 ====");
console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// 예약된 상태
console.log(3);

// 3. 자바스크립트 엔진 동작
function func1() {
  console.log("func1");
  func2();
}

function func2() {
  console.log("func2");
  func3(); // 종료
}

function func3() {
  console.log("func3");
}

func1();

/*
1. func1() -> 콜 스택 func1()추가
2. 콘솔 로그 실행
3. func2() 호출 -> 콜 스택 func2()추가
4. 콘솔 로그 실행
5. func3() 호출 -> 콜 스택 func3()추가
6. 콘솔 로그 실행
7. func3() 종료 -> 콜 스택 제거
8. func2() 종료 -> 콜 스택 제거
9. func1() 종료 -> 콜 스택 제거
*/
// => 자바스크립트는 단일 스레드 기반 -> 한 번에 한 가지 일만 처리할 수 있다!

// 4. 비동기 처리 흐름
console.log("==== 비동기 ====");
console.log(1); // 1. 콜 스택 -> 실행 -> 콜 스택 제거
setTimeout(() => {
  // 2. setTimeout 콜 스택 추가 -> 콜백 함수 Web API 이동/setTimeout 콜 스택 제거 -> 타이머 시작
  //   console.log(2);
}, 1000);
console.log(3); // 3. 콜 스택 -> 실행 -> 콜 스택 제거

// (타이머 완료)
// 4. web API 콜백 함수를 콜백 큐에 등록
// 5. 이벤트 루프가 콜 스택이 비어 있는 걸 확인하고 콜백 함수를 콜 스택으로 이동
// 6. 콜백함수 실행 -> 콜 스택 제거

// 5. 콜백 큐
// FIFO 방식
// 마이크로태스크 큐, 매크로태스크 큐
// 마이크로태스크 큐는 매크로태스큐 보다 우선 실행된다ㅣ.
console.log("==== 콜백 큐 ====");
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
Promise.resolve().then(() => {
  console.log(3);
});
console.log(4);

// 6. 잘못된 비동기 처리
function asyncFunc1() {
  setTimeout(() => {
    return 10;
  }, 1000);
}

function asyncFunc2() {
  setTimeout(() => {
    return 20;
  }, 1000);
}

// 비동기 통신 함수의 결과를 더한 값을 출력합니다.
const result1 = asyncFunc1(); // undefined
const result2 = asyncFunc2(); // undefined
console.log(result1);
console.log(result2);

console.log("result", result1 + result2);

// 콜백을 사용한 해결 방법 (콜백을 중첩)
function asyncFunc3(callback) {
  setTimeout(() => {
    callback(10); // return 대신 callback으로 값 전달
  }, 1000);
}

function asyncFunc4(callback) {
  setTimeout(() => {
    callback(20);
  }, 1000);
}

asyncFunc3((result1) => {
  asyncFunc4((result2) => {
    console.log(result1 + result2); // 30
  });
});
