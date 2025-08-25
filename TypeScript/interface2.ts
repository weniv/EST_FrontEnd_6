interface Vehicle {
  start(): void;
  stop(): void;
}
 
// Car 클래스는 Vehicle 인터페이스를 구현해야 함
// class Car implements Vehicle {
//   start() {
//     console.log("차가 출발합니다");
//   }

//   stop() {
//     console.log("차가 멈춥니다");
//   }
// }

// User 인터페이스 정의
interface User {
  firstName: string;
  lastName: string;
  age: number;
  role: string;
}
 
// UserDetails 인터페이스 정의
interface UserDetails {
  displayName: string;
  age: number;
  isAdmin: boolean;
}
 
// processUser 함수 사용을 위한 인터페이스들이 모두 정의됨
function processUser(user: User): UserDetails {
    console.log(`firstName: ${user.firstName}, lastName: ${user.lastName}`);
    console.log(`age: ${user.age}, role: ${user.role}`);
    return {
        displayName: user.firstName + " " + user.lastName,
        age: user.age,
        isAdmin: user.role === "admin"
    };
}
 
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  role: "admin"
};
 
const details = processUser(user);