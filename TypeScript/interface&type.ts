interface A {
    name: string;
}

interface A {
    job: string;
}

interface B extends A {
    age: number;
}

const value: B = {
    name: 'John',
    job: '개발자',
    age: 27
}

type Animal = {
  name: string;
}