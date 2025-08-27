// 성공/실패를 나타내는 응답 타입
interface User {
  name: string;
  age: number;
  email?: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

// 제네릭 함수 createResponse를 완성하세요
// 성공시: success: true, data 포함
// 실패시: success: false
function createResponse<T>(data: T | null, isSuccess :boolean, message?: string): ApiResponse<T> {
  if(isSuccess) {
	  return {success: true, data: data as T }
  }
  else {
	  return {success: false, message}
  }
}

// 사용 예시 (이 코드들이 올바르게 작동해야 합니다)
const userResponse = createResponse<User>({ name: "홍길동", age: 20 }, true);
const errorResponse = createResponse<User>(null, false, "사용자를 찾을 수 없습니다");