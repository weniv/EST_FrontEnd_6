// 쓰로틀링: 어떤 함수를 지정한 시간 간격마다 한 번만 실행되도록 제한하는 것
// => 일정 시간마다 규칙적으로 실행
// => 함수의 최대 호출 빈도를 제어할 수 있다!!
// func: 실제로 실행하고 싶은 함수
// delay: ms 단위(1000ms -> 1s), 지정 시간

function throttle(func, delay) {
  let isThrottle = false; // 최근에 실행되었는지를 확인

  return function (...args) {
    if (!isThrottle) {
      func(...args);
      isThrottle = true; // 잠금 => 다시 실행하지 못하도록

      // 자동으로 해제
      setTimeout(() => {
        isThrottle = false; // 잠금 해제
      }, delay);
    }
  };
}

function handleClick() {
  console.log("클릭 시간: ", new Date().toLocaleTimeString()); // 오후 15:37:30
}

const throttledClick = throttle(handleClick, 1000);
document.getElementById("button").addEventListener("click", throttledClick);
// document.getElementById("button").addEventListener("click", handleClick);

// 디바운싱: 일정 시간 동안 추가 입력이 없을 때 한 번만 실행
// => 마지막 입력 후 일정 시간이 지나면 실행
// 예) 검색창에 입력할 때 타이핑 멈춘 후에만 검색 실행하고 싶을 때, 또는 유효성 검사
// func: 실제로 실행하고 싶은 함수
// delay: ms 단위(1000ms -> 1s), 지정 시간

// 입력이 멈춘 후에! func 실행
// => 마지막 입력으로부터 delay 시간이 지나야 실행이 된다!
function debounce(func, delay) {
  let timer; // 타이머 ID를 저장하는 변수 => 타이머 취소할 때 사용!

  // args: 인자들이 담긴 배열
  return function (...args) {
    // 1. 기존 타이머 취소
    clearTimeout(timer);

    // 2. 새로운 타이머 등록, 시작
    timer = setTimeout(() => {
      func(...args); // handleInput
    }, delay);
    // => 새로운 타이머를 설정해서, 입력이 지속되지 않으면 delay 시간 후 func()을 실행
    // => delay 시간이 지나기 전에 또 입력이 들어오면 다시 함수가 호출되면서 clearTimeout으로 타이머 취소
  };
}

function handleInput(keyword) {
  // keyword: input의 value 값!
  console.log("검색어: ", keyword);
  // 실제로는 검색 요청을 하는 로직
}

const debouncedSearch = debounce(handleInput, 1000);

document.querySelector("#searchInput").addEventListener("input", (event) => {
  debouncedSearch(event.target.value);
  //   handleInput(event.target.value);
});

/* 디바운스
apple, 1초
a 입력 -> 타이머1 시작 (1초 후 실행 예정)
p 입력 -> 타이머1 취소, 타이머2 시작
p 입력 -> 타이머2 취소, 타이머3 시작
l 입력 -> 타이머3 취소, 타이머4 시작
e 입력 -> 타이머4 취소, 타이머5 시작
.... 1초 동안 입력 없음
타이머5 완료 => 검색 함수 실행/ 검색 요청이 된다!!
=> 사용자가 apple 이라는 검색어를 모두 입력하고 1초 동안 멈춘 후에야 검색이 실행된다!!
*/

// 디바운스 처리를 하지 않았다면?!
// a => 요청
// p => 요청
// p => 요청
// ...
// => 입력을 할 때마다 계속 검색 요청을 하게 됩니다! 심지어 오타까지도..!!

/*
- "마지막 입력 기준"으로 동작 => 'input' 이벤트!!
- 연속 입력 중에는 실행되지 않음
- 입력이 완전히 멈춘 후에만 실행
=> 불필요한 중간 요청/실행을 차단하기 위함!
*/

// => 클로저는 의도를 코드로 명확히 표현하는 구조를 만들기 위해 활용한다!!!
