interface Dog {
  type: 'dog';
  name: string;
  breed: string;
  bark(): void;
}

interface Cat {
  type: 'cat';
  name: string;
  color: string;
  meow(): void;
}

interface Bird {
  type: 'bird';
  name: string;
  canFly: boolean;
  chirp(): void;
}

type Animal = Dog | Cat | Bird;

// 타입 가드 함수들을 구현하세요
function isDog(animal: Animal): animal is Dog {
  // 구현하세요
  return animal.type === 'dog'
}

function isCat(animal: Animal): animal is Cat {
  // 구현하세요
  return animal.type === 'cat'
}

function isBird(animal: Animal): animal is Bird {
  // 구현하세요
  return animal.type === 'bird'
}

// 동물의 소리를 내는 함수를 구현하세요
function makeSound(animal: Animal): void {
  // 타입 가드를 사용하여 각 동물에 맞는 소리 메서드를 호출하세요
  if (isDog(animal)) {
    animal.bark();
  } else if (isCat(animal)) {
    animal.meow();
  } else {
    animal.chirp();
  }
}

// 사용 예시
const dog: Dog = { type: 'dog', name: '멍멍이', breed: '골든리트리버', bark: () => console.log('멍멍!') };
const cat: Cat = { type: 'cat', name: '야옹이', color: '검정', meow: () => console.log('야옹!') };
const bird: Bird = { type: 'bird', name: '짹짹이', canFly: true, chirp: () => console.log('짹짹!') };

makeSound(dog);  // 멍멍!
makeSound(cat);  // 야옹!
makeSound(bird); // 짹짹!