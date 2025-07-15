1. 엄격 모드에서는 변수를 선언하지 않고 사용할 수 있다.(X)
   => "use strict"에서는 반드시 let, const, var로 변수를 선언해야 합니다. 선언하지 않으면 ReferenceError가 발생합니다.

2. ES 모듈을 사용하는 경우, "use strict"를 명시하지 않아도 자동으로 엄격 모드가 적용된다.(O)
   => ES6 모듈은 기본적으로 strict mode가 적용됩니다. 명시할 필요 없이 자동 적용됩니다.

3. 엄격 모드에서는 함수의 매개변수 이름이 중복되어도 에러가 발생하지 않는다.(X)
   => 엄격 모드에서는 중복된 매개변수명을 허용하지 않습니다.

4. 엄격 모드에서 일반 함수 호출 시 this는 무엇을 가리키나요?
   => undefined
   => 일반 함수 호출에서는 암묵적으로 전역 객체(window)를 가리키던 기존과 달리, "use strict"에서는 undefined로 강제됩니다.

5. 동적으로 모듈을 불러오는 함수는 무엇인가요?
   => import()
   => 동적 임포트는 import() 함수로 수행되며, Promise를 반환합니다.
   => await, .then()

6. 모듈 시스템에서 default export 에 대한 특징을 작성해주세요.
   => 한 모듈에 하나만 존재하며, import 시 이름을 자유롭게 정할 수 있습니다.

7. 속성을 보호(관리)하기 위한 2가지 방법!

- Object.defineProperty() – 속성을 하나씩 세밀하게 관리
  - `writable: false` → 수정 불가
  - `enumerable: false` → 열거 불가
  - `configurable: false` → 삭제 불가
- Object.freeze() - 객체 전체를 읽기 전용으로!
