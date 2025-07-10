// 1. Map: 키-값 쌍을 저장하는 자료구조.
// key: 숫자, 불리언, 배열, 객체까지도 가능하다.

let m = new Map();

// 값 설정
m.set("하나", 1);
m.set(1, "하나");
m.set(true, "참");
m.set([1, 2], "배열");

// 값 가져오기
// console.log(m);
console.log(m.get("하나"));
console.log(m.get(1));
console.log(m.get(true));
console.log(m.get([1, 2])); // undefined

const key = [2, 3];
m.set(key, "배열2");
console.log(m.get(key));

// 존재 여부 확인
console.log(m);
console.log(m.has("하나"));
console.log(m.has("둘"));

// 삭제
m.delete("하나");
m.clear(); // 전체 삭제
console.log(m);

// 객체의 size
console.log(m.size);

const m2 = new Map();
m2.set("name", "라이캣");
m2.set("age", 10);

for (const [key, value] of m2) {
  console.log(`${key}: ${value}`);
}

// 2. Set: 중복되지 않은 값을 저장하는 자료 구조.

// 생성
const s1 = new Set();
console.log(s1);

const s2 = new Set([1, 2, 3, 4, 5]);
console.log(s2);

const s3 = new Set([1, 1, 1, 2, 3, 3, 3, 4, 5]);
console.log(s3);

// 값 추가
const s4 = new Set();
s4.add(1);
s4.add(5);
s4.add(7);

s4.add("hello");
s4.add(true);
console.log("s4", s4);
console.log("size: ", s4.size);

console.log(s4.has("hello"));
console.log(s4.has("world"));

s4.delete("hello");
console.log("s4", s4);

// 순회
for (const item of s4) {
  console.log(item);
}

s4.forEach((value) => {
  console.log(value);
});

// 집합 연산
const setA = new Set(["apple", "banana"]);
const setB = new Set(["banana", "kiwi"]);

const 합집합 = new Set([...setA, ...setB]);

console.log("합집합", 합집합);
