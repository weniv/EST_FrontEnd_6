// 순환 참조
function func1() {
  const x = {};
  const y = {};
  x.obj = y;
  y.obj = x;
}
func1();

// => 마크 앤 스위프는 순환 참조 문제도 해결할 수 있다.

// 1. 배열이나 객체를 불변하는 객체처럼
const originArray = [1, 2, 3, 4, 5];

function addElement(newElement) {
  // originArray.push(element)
  return [...originArray, newElement];
}

const newArray = addElement(6);
console.log(originArray);
console.log(newArray);

// map을 사용한 가공된 배열 만들기
const weniv = ["라이캣", "빙키", "개리", "지지"];
const newWeniv = weniv.map((el) => el + "💖");

console.log(weniv);
console.log(newWeniv);

// => 배열이나 객체를 수정할 때, 원본 데이터를 수정하는게 아닌 새로운 배열, 객체를 생성하는 방법이 권장됨.

// 2. 엄격 모드 사용하기
/*
- 변수 선언 강제
- 삭제 불가능한 속성 삭제 시 오류
- 중복 매개변수 사용 불가
- this undefined 강제
 */

// 3. 일치 연산자
console.log(0 == ""); // 동등
console.log(0 === ""); // 일치
