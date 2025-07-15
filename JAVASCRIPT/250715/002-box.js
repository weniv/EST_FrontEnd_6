let position = 0; // 박스 위치
const box = document.querySelector(".box");

// keydown: 키를 누를 때마다 계속 발생!
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    position += 5;
    box.style.transform = `translate(${position}px)`; // 실제로 움직이게 하는 부분
  }
  if (e.key === "ArrowLeft") {
    position -= 5;
    box.style.transform = `translate(${position}px)`;
  }
});
