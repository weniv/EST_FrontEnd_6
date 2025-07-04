const cat = {
  name: "kitty",
  sound: function () {
    console.log("야옹~~");
  },
};

const dog = {
  name: "bobby",
  sound: function () {
    console.log("멍멍~~");
  },
};

cat.sound();

dog.sound(); // 멍멍

//  생성자함수
function Animal(name) {
  this.name = name;
  this.sound = function () {
    console.log(`${this.name} 소리가 납니다.`);
  };
}

const tiger = new Animal("어흥~~~");
const parret = new Animal("짹쨱~~");

tiger.sound();
parret.sound();

// Class
class Animal2 {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name} 소리가 납니다.`);
  }
}

const lion = new Animal2("King~~~~");
lion.sound();

// 생성자 함수로 만들기

function Friends(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, ${name}.`);
  };
}

const ghost = new Friends("Ghost", 1000);
console.log(ghost);
ghost.sayHello(); // 'Hello, Ghost'

// class
class Friends2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, ${this.name}`);
  }

  sayAge() {
    console.log(`Your age is ${this.age}`);
  }
}

const user1 = new Friends2("Irangi", 500);
const user2 = new Friends2("Nuvis", 30);
console.log(user1, user2);
