// 클래스생성하기
class Car {
  name;
  price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.wheels = 4;
  }

  sayName() {
    return `This car is${this.name}, price is ${this.price}won.`;
  }
}

const car1 = new Car("JEEP", 7000);

console.log(car1.sayName()); // 이 차의 이름은 'JEEP'이고, 가격은 7000천만원입니다.
