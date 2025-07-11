// Map: 모든 타입을 키로 사용할 수 있는 객체

// 생성
const emptyMap = new Map();
console.log(emptyMap);
// 값을 추가할 때 set()
// "하나" => 1

// 초기 데이터와 함께 생성, 2차원 배열(키-값 쌍)
const mapWithData = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
console.log(mapWithData);

// 크기 확인 - 객체와 차이점
// 일반 객체
const obj = {
  name: "위니브",
  number: 1,
};
console.log(obj.length); // undefined
console.log(Object.keys(obj).length); // 1
// Map 객체
console.log(mapWithData.size);

const myMap = new Map();
myMap.set("name", "유진");
myMap.set(1, "number"); // 숫자
myMap.set(true, "boolean"); // 불리언
myMap.set([1, 2, 3], "array"); // 배열
myMap.set(Symbol(), "symbol"); // 심볼
myMap.set(null, "null"); // null

// 존재 여부 확인
// Map 객체 - has() => O(1)
console.log(myMap.has("name")); // true
console.log(myMap.has("address")); // false

// 일반 객체 - in 연산자
console.log("name" in obj);
console.log("address" in obj);

// 순회 방법
// Map
for (const [key, value] of myMap) {
  console.log(key, value);
}

myMap.forEach((value, key) => {
  console.log(value, key);
});

// 일반 객체 => Object.keys(), Object.values(), Object.entries()

// 객체 -> Map
console.log(obj);
const mapFromObject = new Map(Object.entries(obj));
mapFromObject.set(true, "boolean");
console.log(mapFromObject);

// Map -> 객체
// Object.fromEntries: 2차원 배열(키-값 목록) => 객체
const newObject = Object.fromEntries(mapFromObject);
console.log(newObject);

// 순서 보장
const map = new Map();
map.set("b", 2);
map.set(1, "일");
map.set("a", 1);
console.log(map);

const obj2 = {};
obj2["b"] = 2;
obj2[1] = "일";
obj2["a"] = 1;
console.log(obj2);

// 차이점 정리
/*
1. 키의 타입
- Map: 모든 데이터 타입을 키로 사용
- Oject: 문자열
2. 순서 보장
3. 성능: 대량의 데이터를 수정하거나 삭제 등 다룰 때 => Map 객체가 성능이 좋다!!
 */
