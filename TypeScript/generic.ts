function getValue<T>(value: T): T {
  return value;
}
 
const numberValue = getValue<number>(123);  // number 타입
const stringValue = getValue<string>("hello");  // string 타입
 
console.log(numberValue);
console.log(stringValue);

// 예제1
interface Container<T> {
    value: T;
}
 
const numberContainer: Container<number> = { value: 10 };
const stringContainer: Container<string> = { value: "hello" };
 
console.log(numberContainer.value); // 10
console.log(stringContainer.value); // hello