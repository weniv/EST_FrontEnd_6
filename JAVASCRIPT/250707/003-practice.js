// 실습: 재료를 넣으면, "OO 맛과 OO 맛이 난다!"는 문장을 출력하는 기능
// 꼭 인스턴스를 만들어서 console.log()로 결과도 확인해 보세요!

// [실습1] 소시지 클래스 만들기(Sausage 클래스)
// 매개변수 2개 → taste1, taste2
// eat() 메서드 → '{taste1}와 {taste2} 맛이 난다!' 출력
class Sausage {
  constructor(taste1, taste2) {
    this.taste1 = taste1;
    this.taste2 = taste2;
  }

  eat() {
    console.log(`${this.taste1}와 ${this.taste2} 맛이 난다!`);
  }
}

// [실습2] 직화 소시지 클래스 만들기(GrilledSausage 클래스)
// Sausage 클래스를 상속받기
// eat() 메서드를 오버라이딩 → '{taste1}와 {taste2} 맛이 난다! 불 맛도 난다!' 출력
class GrilledSausage extends Sausage {
  // 생략 해도 됨!
  constructor(taste1, taste2) {
    super(taste1, taste2);
    this.taste3 = "불";
  }

  eat() {
    console.log(
      `${this.taste1}와 ${this.taste2} 맛이 난다! ${this.taste3} 맛도 난다!`
    );
  }

  //  eat() {
  //     console.log(
  //       `${this.taste1}와 ${this.taste2} 맛이 난다! 불 맛도 난다!`
  //     );
  //   }
}

//실행
const sausage1 = new Sausage("소고기", "파");
const sausage2 = new Sausage("소고기", "치즈");

sausage1.eat(); // 소고기와 파 맛이 난다!
sausage2.eat(); // 소고기와 치즈 맛이 난다!

const grilled = new GrilledSausage("닭고기", "떡");
grilled.eat();
console.log(grilled.taste1);
// 닭고기와 떡 맛이 난다! 불 맛도 난다!
