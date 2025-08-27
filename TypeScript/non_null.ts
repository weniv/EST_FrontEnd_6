// 기본적인 예제
const $button = document.querySelector('button');
// 이 시점에서 TypeScript는 $button이 null일 수 있다고 생각합니다
// 타입스크립트는 이 경우 button을 아래와 같이 타입추론 합니다
const $button: HTMLButtonElement | null
// $button.click(); // 에러 발생!
 
// Non-Null 단언 사용
const $safeButton = document.querySelector('button')!;
$safeButton.click(); // 정상 작동

//---
document.querySelector('input')!.addEventListener('change', (e) => {
    // e.target은 기본적으로 EventTarget 타입
    const target = e.target as HTMLInputElement;
    console.log(target.value); // .value 접근 가능
 
    // as 없이 작성한다면:
    // const target = e.target;
    // console.log(target.value); // 에러 발생!
});

//---
interface User {
    name: string;
    age: number;
}
 
const userJSON = '{"name": "John", "age": 30}';
const user_ = JSON.parse(userJSON) as User;
console.log(user_.name); // 타입 안전성 확보