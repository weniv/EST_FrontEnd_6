/**
 * 예제 1
 */
type GetReturnType<T> = T extends () => infer R ? R : never;

// 사용 예시
type MessageType = GetReturnType<() => string>;  // string
type NumberType = GetReturnType<() => number>;    // number
type NeverType = GetReturnType<boolean>; // never

/**
 * 예제 2
 */  
type Unwrap<T> = T extends Promise<infer U> ? U : never;
//                                ^^^^^^^ 
//                                "Promise 안의 타입을 U에 저장해줘"

type PromiseString = Unwrap<Promise<string>>; // string
type PromiseNumber = Unwrap<Promise<number>>; // number
type NotPromise = Unwrap<string>;             // never (Promise가 아님)


/**
 * infer는 패턴 매칭이 성공했을 때만 작동합니다.
 * 패턴 정의: T extends 패턴 ? 성공케이스 : 실패케이스
 * 매칭 체크: 들어온 타입이 패턴과 정확히 일치하는가?
 * 결과 반환: 매칭되면 infer로 추론한 타입, 아니면 실패케이스
 */