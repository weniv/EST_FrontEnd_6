const obj = {
  name: "ghost",
  age: 1000,
  sayHello() {
    return `Hello, ${this.name}`; //obj.name
  },
  sayBye: function () {
    return `Good bye, ${this.name}`; // obj.name
  },
  getAge: () => {
    return this.age; // 화살표함수안의 this는 obj를 가리키지 않으므로 주의.
  },
};

console.log(obj.sayHello());
console.log(obj.sayBye());
console.log(obj.getAge());

const ghost = {
  age: 1000,
  mbti: "INFJ",
  say: function () {
    console.log("say Hello");
  },
};

console.log(ghost.age, ghost.mbti); // 접근방법, 값을 가져오는 방법
ghost.age = 500; // 수정방법

console.log(ghost);

const type = "age";
console.log(ghost[type]); // key값이 변수값으로 들어오면 [변수 ]

ghost.say();
