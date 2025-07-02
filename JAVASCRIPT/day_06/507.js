const users = [
  { nickName: "Irangi", role: "admin", email: "irangi@gmail.com" },
  { nickName: "Ghost", role: "superAdmin", email: "ghost@gmail.com" },
  { nickName: "shoopa", role: "user", email: "shoopa@naver.com" },
  { nickName: "Camel", role: "user", email: "camel@kakao.com" },
  { nickName: "Mui", role: "user", email: "mui@naver.com" },
];
const posts = [
  { title: "Javascript", tags: ["JS", "ES6", "NodeJS"] },
  { title: "React", tags: ["React", "Redux", "Hooks"] },
  { title: "Vue", tags: ["Vue", "Vuex", "Vue Router"] },
];

// 1) users에서  admin 권한을 가진 요소출력,  사용자의 nickName을 출력 / 사용자의 이름은 알파벳순으로 정렬해서 배열로 반환
// admin권한 -> superAdmin , admin
const adminRoles = ["admin", "superAdmin"]; // includes
const adminList = users.filter((user) => adminRoles.includes(user.role));
const adminNames = adminList.map((admin) => admin.nickName);
const adminSort = adminNames.sort((a, b) => a.localeCompare(b));

console.log("adminNames :", adminNames);

// ['Ghost','Irangi']

// 2) users에서 일반유저가 몇명인지 출력. -> 일반유저는 총3명입니다.
const userCount = users.filter((user) => user.role === "user").length;
console.log(`User count is ${userCount}.`);

// 3) posts 에서 tag 목록을 출력하시오. 최종변수 tagList 에 넣어서 출력
// 출력결과 -> JS, ES6, NodeJS, React, Redux, Hooks, Vue, Vuex, Vue Router
const tagList = posts
  .map((post) => post.tags)
  .flat()
  .join(", ");
console.log(tagList);
