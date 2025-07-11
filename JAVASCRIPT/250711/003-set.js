// Set: 중복되지 않은 값만 저장하는 집합

const set1 = new Set([1, 1, 3, 4, 5, 6]);
console.log(set1);
console.log([...set1]);

const stringSet = new Set("Hello World");
console.log(stringSet);

// 크기 확인
console.log(set1.size);

// 인덱스 접근
const arr = [1, 2, 3, 4, 5];
console.log(arr[1]);
console.log(set1[0]); // undefined - 인덱스 접근 불가
// Set은 순서는 보장되지만, 인덱스 접근은 불가하다.

// 값 존재 확인
console.log(arr.includes(3)); // true
console.log(arr.includes(7)); // false
console.log(set1.has(4)); // true
console.log(set1.has(7)); // false

// Set -> 배열 => 변환될 때 중복이 제거가 된다!!
const arrFromSet = Array.from(set1);
console.log(arrFromSet);
console.log([...set1]);

// 배열 -> Set
const arr1 = [1, 1, 1, 1, 4, 4, 4, 3, 3, 2];
const unique = new Set(arr1);
console.log(unique);

// 배열 -> Set -> 배열
const set2 = [...new Set(arr1)];
console.log(set2);

// 사용자가 선택한 태그들에서 중복 제거
const SelectedTag = [
  "JavaScript",
  "Python",
  "JavaScript",
  "React",
  "HTML",
  "HTML",
  "CSS",
];
const uniqueTags = [...new Set(SelectedTag)];
console.log(uniqueTags);

// 집합
const setA = new Set(["apple", "banana"]);
const setB = new Set(["banana", "kiwi", "strawberry"]);

// 1. 합집합
const unionSet = new Set([...setA, ...setB]);
// ["apple", "banana", "banana", "kiwi"] => set 변환되면서 중복 제거
console.log("합집합", unionSet);

// 2. 교집합
const intersectionSet = new Set([...setA].filter((el) => setB.has(el)));
console.log("교집합", intersectionSet);

// 3. 차집합
// 3-1. setA에는 있지만 setB에는 없는 요소
const diffAB = new Set([...setA].filter((el) => !setB.has(el)));
console.log("차집합(A)", diffAB);

// 3-2. setB에는 있지만 setA에는 없는 요소
const diffBA = new Set([...setB].filter((el) => !setA.has(el)));
console.log("차집합(B)", diffBA);

/*
1. Set
 - 중복 제거가 필요할 때
 - 순서보다는 고유성이 중요

2. Array
- 중복이 필요할 때
- 인덱스 접근이 필요할 때
 */
