const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat()); // 기본값은 1
console.log(arr.flat(2));
console.log(arr);

const users = ["Daniel", "Amy", "donald", "Micheal", "Juliet"];
users.sort();
console.log(users);

const numbers = [51, 2, 12, 1, 22, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

const numbers2 = [1, 2, 3, 4, 5];
// some() 결과값이 하나라도 true -> true
const hasEven = numbers2.some((num) => num % 2 === 0);
console.log(hasEven);

// every() 결과값이 모두 true -> true
const allEven = numbers2.every((num) => num % 2 === 0);
console.log(allEven);

// 콜백함수
// reduce( reducer 리듀서)
// filter( true, false -> predicate 함수(boolean값반환)), some,every,
// map( mapping Function)

// 1. users에 'Amy'가 포함되어있는지 확인 some
// 2. numbers에서 3보다 큰값이 있는지 확인 some

const fruits = ["apple", "banana", 3];
// 3. fruits변수안에 있는 값이 모두 문자열인지 확인 every
// typeof fruit === 'string'

const emails = ["test@example.com", "hello@domain.com", "user@site.org"];
// 4. 이메일형식이 모두 맞는지 확인(@와 .이 반드시 있어야함) every

const arr2 = [3, 4];
console.log(Array.isArray(arr2));
