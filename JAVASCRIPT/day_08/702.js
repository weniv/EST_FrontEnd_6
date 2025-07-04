// 몇초에 한번 반복하겠다.

function sayHello(name) {
  console.log(`Hello, ${name}`);
}

const timerId = setInterval(sayHello, 1000, "Ghost");
clearInterval(timerId);

function sayBye(name) {
  console.log(`Good-bye, ${name}`);
}

// 3초후에 sayBye실행. setTimeout
const timer = setTimeout(sayBye, 3000, "Irangi");
clearTimeout(timer);
