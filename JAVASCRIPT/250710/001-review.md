# 퀴즈

1. fetch API는 XMLHttpRequest보다 Promise 기반으로 동작하여 더 간결하다.(O)
   => fetch API는 XMLHttpRequest보다 간결하고 가독성 좋은 코드를 작성할 수 있습니다.

2. HTTP GET 요청은 주로 데이터를 생성할 때 사용한다.(X)
   => GET은 데이터를 조회할 때 사용하고, POST가 데이터를 생성할 때 사용됩니다.

3. CORS는 같은 출처에서만 리소스를 공유할 수 있도록 제한하는 정책이다.(X)
   => CORS는 교차 출처 리소스 공유를 허용하고, SOP(Same Origin Policy)가 같은 출처로 제한하는 정책입니다.
   => SOP 보안 정책으로 CORS 에러가 발생합니다.

4. fetch 요청에서 응답 상태 코드가 404일 때 catch로 이동한다.(X)
   => fetch는 네트워크 오류만 catch로 이동하므로 404는 then에서 response.ok로 확인해야 합니다.

5. JavaScript 객체를 JSON 문자열로 변환하는 메서드는?
   => JSON.stringify()

6. Promise의 finally 메서드의 특징은?
   => 성공과 실패 관계없이 항상 실행된다. 결과가 어떻든 마지막에 실행되어야 하는 코드를 작성할 때 사용합니다.

# 총정리

## 비동기 처리 vs 비동기 통신

1. 비동기 처리: 코드의 실행 순서를 조절하는 방식
2. 비동기 통신: 네트워크를 서버와 데이터를 주고받는 것
   => 두 개념은 다르지만, 함께 활용하게 된다!

## Promise

1. **Promise = 포장된 상자**
   - 결과를 담을 예정인 상자
   - 상자를 열기 전에는 내용물을 볼 수 없음
2. **then() = 상자를 여는 도구**
   - 상자가 열리면 실행할 함수를 등록
   - 안전한 접근 방법
3. **resolve/reject = 상자에 결과 넣기**
   - resolve: 성공 결과를 상자에 넣음
   - reject: 실패 이유를 상자에 넣음

### 동작 방식

1. 함수는 즉시 반환되어야 함.
2. 결과는 나중에 처리된다. => 실제 작업은 백그라운드(Web API)에서 처리되고, 완료되면 콜백을 통해 결과를 받는 구조.

### resolve, reject 결과는 어디로?!

=> promise 객체

1. resolve() 호출하면?

   - promise 상태 'fulfilled'로 변경됨.
   - 전달된 데이터가 promise 내부에 저장됨.

2. reject() 호출되면?
   - promise 상태 'rejected'로 변경됨.
   - 에러 메시지나 Error 객체가 전달되면, promise 내부에 저장됨.

```
// Promise 객체의 구조를 개념적으로 가정해본 것
const promise = {
	state: "pending", // 상태
	value: undefined, // 결과값
	onFulfilled: [], // then 콜백들
	onRejected: [], // catch 콜백들
	.....
}
```

### then()

- 결과는 Promise 객체 내부에 저장됨
- 하지만, 직접 접근 불가(캡슐화된 객체) ⇒ 직접 접근할 수 없는 내부(비공개) 슬롯에 저장됨.
- 안정성 보장을 위해! ⇒ 내부 값에 직접 접근하면 안전하지 않음
- then()은 **안전한 접근 방법**

# Fetch 동작 흐름

- 호출 순간

  1.  `fetch()` 함수가 콜스택에 들어감
  2.  즉시 Promise 객체를 생성 (상태: pending)
  3.  네트워크 요청 로직을 **Web API**에 위임
  4.  Promise 객체를 반환하고 fetch 함수는 콜스택에서 제거

- 응답 도착 후
  1.  Web API가 서버 응답을 받음
  2.  Response 객체를 생성
  3.  Promise의 상태를 `pending` → `fulfilled`로 변경
  4.  then 콜백을 **마이크로태스크 큐**에 등록
  5.  이벤트 루프가 콜백을 콜스택으로 이동시켜 실행

```
function fetchProductById(id) {
	// 1. 네트워크 요청 시작 => 브라우저 서버에 요청을 보냄, 동시에 promise 객체 반환
  fetch(`https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${id}`, {
    method: "GET",
  })
    // 2. 응답 헤더 도착 => response: 응답 정보(헤더, 상태코드 등)
    .then((response) => {
      if (!response.ok) {
        throw new Error("상품 조회를 실패했습니다.");
      }
	  // 실제 데이터를 읽기 위해 .json() 파싱
      return response.json();
    })

	// 3. 데이터 파싱 완료
    .then((data) => {
	  // 이게 진짜 우리가 사용할 수 있는 데이터
      console.log(`${id} 상품 정보`, data);
    })
    .catch((error) => {
      console.error(error);
    });
}
```

### 자주 하는 실수

- Promise 결과를 바로 사용하려고 시도

  ```
  const result = fetch("url");
  console.log(result); // Promise{<pending>}
  ```

- response.json() 빼먹기

  ```
  fetch("url");
  	.then(response => {
  		console.log(response); // Response 객체 (데이터 아님)
  	});
  ```
