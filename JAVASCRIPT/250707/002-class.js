class Robot {
  // 초기값 설정
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`삐빅- 저는 ${this.name}입니다.`);
  }

  move() {
    console.log(`${this.name}이 이동 중입니다.`);
  }
}

// 인스턴스 생성
const robot1 = new Robot("오르미봇");
const robot2 = new Robot("위니브봇");

console.log(robot1);
console.log(robot2);
robot1.introduce();
robot2.introduce();
robot1.move();

// 클래스 상속: 기존 클래스의 기능을 그대로 물려받고, 자기만의 기능이나 속성을 추가하는 것
// 기존 클래스: 부모 클래스, 기반 클래스
// 상속 받는 클래스: 자식 클래스, 파생 클래스

class BabyRobot extends Robot {
  // 생략 가능 => super(...args) 자동 호출
  constructor(name, age) {
    super(name); // 호출하지 않으면 에러 => 꼭 먼저 호출해야 합니다!!!
    this.age = age;
    this.company = "위니브";
  }

  // 오버라이딩: 같은 메서드를 다시 정의하는 것!
  introduce() {
    console.log(`삐빅- 저는 ${this.company}의 ${this.name}입니다.`);
  }
}

const babyRobot = new BabyRobot("베이비오르미", 10);
console.log(babyRobot);
babyRobot.introduce();
