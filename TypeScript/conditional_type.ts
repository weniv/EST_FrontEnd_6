interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  discountRate: number;
}

// API 응답 타입을 조건부로 결정
type ModelType = 'user' | 'product' | 'invalid'

type ApiResponse<T extends ModelType> = 
    T extends 'user' 
    ? { data: User; status: 'success' }
    : T extends 'product'
    ? { data: Product; status: 'success' }
    : { error: string; status: 'error' };

// 사용 예제
type UserResponse = ApiResponse<'user'>;     // { data: User; status: 'success' }
type ProductResponse = ApiResponse<'product'>; // { data: Product; status: 'success' }
type ErrorResponse = ApiResponse<'invalid'>;   // { error: string; status: 'error' }