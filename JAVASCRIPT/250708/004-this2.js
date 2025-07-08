// 1. call(): 호출과 동시 this를 바꿔주는 방법
const user = {
  name: "빙키",
  sayName() {
    console.log(this);
    console.log(`내 이름은 ${this.name}`);
    // this.sayHello();
  },
};

const bot = {
  name: "빙키봇",
  sayHello() {
    console.log("hello");
  },
};

// this -> user 객체
user.sayName();
user.sayName.call(bot);

// 2. apply
// call과 동일하게 동작하지만, 인자를 배열로 받는다는 차이만 있다!
function introduce(age, hobby) {
  console.log(`내 이름은 ${this.name}, ${age}살, 취미는 ${hobby}`);
}
// introduce(20, "요가");

const person = { name: "채준" };
introduce.call(person, 20, "요가");
introduce.apply(person, [20, "요가"]); // 인자를 배열로 전달

// 3. bind
const user2 = {
  name: "빙키2",
  sayName() {
    console.log(`내 이름은 ${this.name}`);
  },
};

const guest = { name: "게스트" };
// this를 객체 guest로 고정!
const bindFunc = user2.sayName.bind(guest);
console.log(bindFunc);
bindFunc();

/* this는 무엇을 가리키는가??
- (생성자 함수, 클래스)new 키워드 => 새로운 인스턴스
- 객체의 메서드 호출 -> 점(.) 앞의 객체
- 화살표 함수이면? -> 상위 스코프의 this를 그대로 받음.
- 이벤트 핸들러 안에서의 this -> 일반 함수(DOM 요소), 화살표 함수(상위 스코프)
- call/apply/bind -> 명시적 this 바인딩
- 그 외 일반 함수 호출 -> window(strict mode에서 undefined)
*/
