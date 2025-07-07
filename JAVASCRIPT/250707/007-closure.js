// 클로저: 함수 외부에서 내부 함수가 참조하던 변수에 계속 접근할 수 있는 현상
function outer() {
  const outVar = "outer 변수";

  function inner() {
    console.log(outVar);
  }

  return inner;
}

const innerFunc = outer();
innerFunc();

// 데이터 은닉
function createCounter() {
  let count = 0;

  // 외부에서 count를 직접 바꿀 수는 없다! 제한적 접근!
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();

// 모듈 패턴
const moduleCounter = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    getCount: function () {
      console.log(count);
    },
  };
})();

console.log(moduleCounter);

// 좋아요 버튼 구현 => 좋아요 수를 관리하는 함수
function createLikeCounter() {
  let count = 0;

  return {
    like: function () {
      count++;
      console.log(`좋아요 ${count}개`);
    },
    getLikes: function () {
      return count;
    },
  };
}

const likeButton = createLikeCounter();
console.log(likeButton);
likeButton.like();
likeButton.like();
likeButton.like();
console.log(likeButton.getLikes());

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

// 디바운싱: 일정 시간 동안 추가 입력이 없을 때 한 번만 실행
// => 마지막 입력 후 일정 시간이 지나면 실행
// 예) 검색창에 입력할 때 타이핑 멈춘 후에만 검색 실행하고 싶을 때, 또는 유효성 검사
