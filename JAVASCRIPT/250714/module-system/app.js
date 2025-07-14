// 정적 임포트
// import minus, { PI, add as sum } from "./utils.js";
import { user } from "./utils.js";
// import sub from "./utils.js";
// import minus from "./utils.js";

// console.log(PI);
// console.log(add);
// console.log(sum(2, 4));
// console.log(minus(5, 2));

// 동적 임포트: import() => Promise 객체
// 사용자가 요청했을 때만, 필요한 순간에만, 가볍게 불러오는 방식!
const btn = document.getElementById("module-btn");
btn.addEventListener("click", async () => {
  const { PI, add } = await import("./utils.js");
  console.log("module", PI);
  console.log("module", add);
  console.log("module", add(2, 4));
});

// 모듈의 속성 관리
console.log(user);
user.name = "빙키";
// user.password = "1234";
console.log(user);

// 모듈 시스템의 규칙: export 된 변수는 외부에서 직접 재할당하거나, 덮어쓸 수 없다!!
// user = {
//   name: "위니브",
// };
