interface Cat<T> {
    name: T;
    age: number;
}
 
interface Licat<T, U> extends Cat<T> {
    hp: number;
    mp: U;
}
 
const licat: Licat<string, number> = {
    name: "licat",
    age: 3,
    hp: 100,
    mp: 50
};
 
const licat_bot: Licat<number, string> = {
    name: 1,  // name이 number 타입
    age: 3,
    hp: 100,
    mp: "high"
};

interface Container<T> {
    value: T;
    getValue(): T;
}
 
class StringContainer implements Container<string> {
    value: string;
    
    constructor(value: string) {
        this.value = value;
    }
    
    getValue(): string {
        return this.value;
    }
}
 
const s = new StringContainer("hello");
// console.log(s.getValue()); // hello


class Queue<T> {
    private data: T[] = [];
    
    push(item: T) {
        this.data.push(item);
    }
    
    pop(): T | undefined {
        return this.data.shift();
    }
}
 
const numberQueue = new Queue<number>();
numberQueue.push(10);  // OK
numberQueue.push(11);
numberQueue.push(12);
numberQueue.push(13);

console.log(numberQueue.pop());
console.log(numberQueue.pop());
console.log(numberQueue.pop());
console.log(numberQueue.pop());
console.log(typeof numberQueue.pop());
// numberQueue.push("10"); // 에러: string 타입은 number 타입에 할당할 수 없습니다