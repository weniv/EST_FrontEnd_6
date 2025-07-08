// [실습1] customer.greet 메서드를 newCustomer에서 사용하도록 bind 해보세요!
const customer = {
  name: "빙키",
  phone: "010-1234-5678",
  greet() {
    console.log(`안녕하세요! ${this.name}입니다. 연락처: ${this.phone}`);
  },
};

const newCustomer = {
  name: "지지",
  phone: "010-1111-2222",
};

const newGreet = customer.greet.bind(newCustomer);
newGreet();
// 출력 예시: "안녕하세요! 지지입니다. 연락처: 010-1111-2222"

// [실습 2] 이벤트 핸들러 문제 해결하기
// bind를 사용해서 버튼 클릭 시 카운터가 증가하지 않는 문제를 해결해 보세요!

const counter = {
  count: 0,

  handleClick() {
    console.log("handleClick", this);
    console.log("count", this.count);
    this.count++; // undefined++ => NaN
    document.getElementById(
      "clickBtn"
    ).textContent = `클릭 횟수: ${this.count}`;
  },

  init() {
    console.log(this); // counter

    // document
    //   .getElementById("clickBtn")
    //   .addEventListener("click", this.handleClick);
    document
      .getElementById("clickBtn")
      .addEventListener("click", this.handleClick.bind(this));
  },
};

counter.init();

/* bind 없이 호출되었을 때 흐름
1. 이벤트 리스너 등록 시점
- this.handleClick -> 함수 자체만 전달됨(this 정보는 전달되지 않음)

2. 버튼 클릭 시점
- handleClick() 호출
- this => 이벤트가 발생한 요소 => 버튼으로 설정
*/

/* bind를 사용했을 때 흐름
1. 이벤트 리스너 등록 시점 
- bind가 먼저 실행되면서 this가 counter 객체로 고정되고, 그 고정된 함수가 새로 생성
- 새로운 함수가 이벤트 리스너로 등록
=> 정리: bind()가 먼저 실행되어서 this가 고정된 새로운 함수 생성

2. 버튼 클릭 시점
- bind로 만들어진 새로운 함수가 호출(this가 counter 객체로 고정되어 있는 상태)
- 브라우저가 this를 바꿀 수 없음. (기존 이벤트 핸들러 방식 X)
- this는 counter!!!
=> 브라우저가 함수를 호출하지만, 이미 고정된 this가 우선
*/
function a() {}

const b = a;

// bind()가 내부적으로 하는 일
Function.prototype.bind = function (thisArgs) {
  const originFunc = this; // counter.handleClick

  return function (...args) {
    return originFunc.call(thisArgs, ...args);
  };
};

/*
bind를 사용하는 이유
1. 함수의 this를 고정하고 싶을 때
2. 이벤트 핸들러에서 원본 객체를 참조하고 싶을 때
3. 콜백 함수에서 this 문제를 해결하고 싶을 때
*/
