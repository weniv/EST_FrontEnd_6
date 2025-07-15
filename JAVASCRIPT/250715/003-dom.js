const parent = document.getElementsByClassName("parent")[0];
// getElementsByClassName 배열로 반환 => article

// console.log(document.getElementsByClassName("parent"));

// const img = parent.getElementsByTagName("img")[0];
// const figCap = parent.querySelector(".figCap");

// console.log(parent);
// console.log(img);
// console.log(figCap);

// document.querySelector => 넓은 범위에서 탐색하기 때문에 성능에서 비효율적일 수 있다.

const figure = parent.firstElementChild;
const img = figure.firstElementChild;
const figCap = figure.lastElementChild;

console.log(figure);
console.log(img);
console.log(figCap);

img.src =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*nZaiJiMSPGsLGp9oiUoWsA.png";
figCap.textContent = "개리는 무엇을 먹을지 고민합니다.";

// 고정된 구조, 바뀔 가능성이 없을 때 => 성능에 유리하다.
// 탐색 범위가 작기 때문에 빠릅니다! 성능이 약간 더 좋다.
