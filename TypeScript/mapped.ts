// 기본 인터페이스
interface UserIn {
    name: string;    // 필수
    age: number;     // 필수
    email: string;   // 필수
}
 
// 모든 속성을 선택적(optional)으로 만드는 맵드 타입
type Optional<T> = {
    [P in keyof T]?: T[P];
};
 
// 사용 예시
type OptionalUser = Optional<UserIn>;
 
// OptionalUser는 다음과 같은 형태가 됩니다:
// {
//     name?: string;    // 선택적
//     age?: number;     // 선택적
//     email?: string;   // 선택적
// }
 
// 실제 사용
const user1: UserIn = {
    name: "licat",     // 모든 속성이 필수
    age: 10,
    email: "kim@mail.com"
};
 
const user2: OptionalUser = {
    name: "mura"      // 일부 속성만 사용 가능
};  // OK! - age와 email이 선택적이므로 생략 가능

//---
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  category?: string;
}
 
// 모든 속성을 읽기 전용으로 만드는 맵드 타입
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};
 
// 사용 예시
type ReadonlyProduct = MyReadonly<Product>;
 
const readonlyProduct: ReadonlyProduct = {
    id: 1,
    title: '',
    name: "태블릿",
    price: 500000,
    description: "10인치 태블릿",
    category: "전자기기"
};
 
// 아래 코드는 에러 발생
// readonlyProduct.price = 400000; // Error: Cannot assign to 'price' because it is a read-only property.
 
console.log(readonlyProduct);
 
// 모든 속성을 필수로 만드는 맵드 타입
type MyRequired<T> = {
    [P in keyof T]-?: T[P];
};
 
// 사용 예시
type RequiredProduct = MyRequired<Product>;
 
// 모든 필드가 필수이므로 아래처럼 모든 속성을 포함해야 함
const requiredProduct: RequiredProduct = {
    id: 1,
    title: '',
    name: "스마트폰",
    price: 1200000,
    description: "최신형 스마트폰", // 선택적 필드였지만 이제는 필수
    category: "전자기기"           // 선택적 필드였지만 이제는 필수
};
 
console.log(requiredProduct);