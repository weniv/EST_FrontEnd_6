1. constructor()는 클래스의 어떤 상황에서 실행되는 메서드인가요?
   => 인스턴스 생성 시
   => constructor()는 클래스를 통해 인스턴스를 만들 때 자동으로 호출되는 초기화 메서드입니다.

2. 아래 코드에서 this는 무엇을 가리킬까요?

```javascript
const obj = {
  name: "Weniv",
  getName: function () {
    return this.name;
  },
};
console.log(obj.getName());
```

=> obj 객체
=> 객체의 메서드로 호출되었기 때문에 this는 해당 객체(obj)를 가리킵니다.

3. fetch API는 기본적으로 어떤 객체를 반환하나요?
   => fetch 호출 즉시 Promise를 반환한다.
   => 응답을 사용(확인)하기 위해 .then(), async/await 사용

4. 다음 중 실제 데이터를 JSON으로 파싱하는 코드로 알맞은 것은?

```javascript
fetch("url").then((response) => ____);
```

=> response.json()
=> Response 객체의 .json() 메서드는 본문을 파싱하여 JSON 객체로 반환합니다.

5. 다음 코드에서 new Set()을 사용하는 주된 목적은?

```javascript
const arr = ["apple", "banana", "apple"];
const unique = [...new Set(arr)];
```

=> 배열 내 중복 제거

6. 클로저에 대한 설명으로 옳지 않은 것은?(B)
   A. 함수가 외부 변수에 접근할 수 있게 한다
   B. 메모리 누수 위험이 전혀 없다
   C. 내부 함수가 외부 함수의 변수를 참조한다
   D. 데이터 은닉에 활용할 수 있다
   => 클로저는 상태를 유지할 수 있지만, 사용을 잘못하면 참조가 해제되지 않아 메모리 누수가 발생할 수 있습니다.

7. `debounce` 함수는 어떤 상황에서 주로 사용될까요?(D)
   A. 실시간 마우스 위치 추적
   B. 스크롤 이벤트 처리
   C. 버튼 클릭 이벤트
   D. 자동완성 검색창 입력 처리
   => debounce는 마지막 입력 후 일정 시간 지나서만 실행되기 때문에 실시간 처리보다 사용자 입력 완료를 기다리는 경우 적합합니다.

8. 다음 코드의 실행 결과를 순서대로 작성하세요

```js
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

console.log(4);
```

=> 1 → 4 → 3 → 2
=> console.log(1), console.log(4): 동기
=> Promise.then(): 마이크로태스크 큐
=> setTimeout(): 매크로태스크 큐

---

1. 다음 코드의 실행 결과는?

```js
console.log(typeof null);
```

=> "object"
=> null은 JS에서 "값이 없음"을 나타내는 원시 타입이지만, typeof null은 "object"를 반환합니다. 이는 JS 초기 설계 오류로, null의 내부 표현값이 0으로 시작하는 레퍼런스 형식과 비슷해서 발생한 버그입니다. 오래된 웹과의 호환성 문제로 수정되지 않고 유지되고 있음.

2. 다음 코드의 실행 결과는?

```js
console.log([] + []);
```

=> ""(빈 문자열)
=> [].toString() => ""
=> "" + ""
=> `+` 연산자는 두 값 중 하나라도 문자열이면 문자열 연결 연산자로 동작합니다. 하지만 배열에서 문자열 연산이 일어나면 자동으로 문자열로 변환된다!

3. 다음 코드의 실행 결과는?

```js
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

=> 1 < 2 < 3: true => 1 < 3 => true
=> 3 > 2 > 1: 3 > 2 => true(1) > 2 => false

4. 다음 코드의 실행 결과는?

```js
console.log(NaN === NaN);
```

=> false
=> isNaN() 또는 Number.isNaN()

5. 다음 코드의 실행 결과는?

```js
console.log("5" + 1);
console.log("5" - 1);
```

```
"51"
4
```

=> +: 문자열이 하나라도 있으면 문자열 연결
=> -, \*, /: 항상 숫자로 변환 후 계산

6. 다음 코드의 실행 결과는?

```js
console.log(typeof typeof 123);
```

=> "string"
=> typeof 123 => "number"
=> typeof "number" => "string"

7. 다음 코드의 실행 결과는?

```js
console.log(!!"false" == !!"true");
```

=> true
=> !!"false" => !false => true
=> !!"true" => !false => true
=> true == true

8. 다음 코드의 실행 결과는?

```js
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr);
```

=> []
=> 배열의 `.length` 속성은 배열 요소의 개수를 의미합니다. `length = 0`으로 설정하면 내부 요소들이 전부 제거됩니다. 배열을 한 번에 비울 때 유용하지만, 원본 배열이 직접 수정되므로 주의가 필요합니다.

9. 다음 코드의 실행 결과는?

```js
const a = [];
const b = [];

console.log(a == b);
console.log(a === b);
```

=> false, false
=> 배열과 객체는 참조 타입이기 때문에 같은 내용을 가지고 있어도 서로 다른 인스턴스이기 때문에 `==`, `===` 모두 false를 반환합니다.

10. forEach 대신 for...of 루프가 특히 유용한 상황은 언제일까요?

- 루프를 중간에 종료하거나 건너뛰어야 할 때(`break`, `continue` 사용이 필요할 때)
- 순차적으로 await 처리가 필요한 반복 작업일 때, 비동기 작업이 필요할 때
  => `for...of`는 조건 분기 + 비동기 처리 + 흐름 제어가 필요한 반복문에서 매우 유용합니다.
