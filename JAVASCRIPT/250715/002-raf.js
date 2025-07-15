let position = 0;

// 상태 변수: 각 방향키가 눌렸는지 여부에 대한 상태
// 키가 눌리면 true, 떼면 false
let isMovingRight = false;
let isMovingLeft = false;

const box = document.querySelector(".box");

// 키가 눌렸을 때 해당 방향 상태를 true 변경
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    isMovingRight = true;
  }
  if (e.key === "ArrowLeft") {
    isMovingLeft = true;
  }
});

// 키를 뗐을 때
document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    isMovingRight = false;
  }
  if (e.key === "ArrowLeft") {
    isMovingLeft = false;
  }
});

function animate() {
  if (isMovingRight) {
    position += 5;
  }
  if (isMovingLeft) {
    position -= 5;
  }

  box.style.transform = `translate(${position}px)`;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

/*
- 키를 누름: keydown 이벤트(한 번만 발생)
- 계속 누르고 있음: 이벤트 발생 하지 않음
- 키를 뗌: keyup 이벤트(한 번만 발생

1. 오른쪽 키를 누름
-> keydown 이벤트 발생(한번만)
-> isMovingRight = true

2. 이후 계속 누르고 있는 동안
-> 키보드 이벤트 발생 안함
-> animate 함수만 계속 실행
-> 매 프레임마다 isMovingRight 확인 => position += 5

3. 오른쪽 키를 뗌
-> keyup 이벤트 발생(한번만)
-> isMovingRight = false

4. 이후
-> animate 함수는 실행
-> isMovingRight가 false 이므로 위치 변경 안함(다시 키를 누르기 전까지)
*/

/*
프레임1: animate() -> isMoving = true -> position = 5
프레임2: animate() -> isMoving = true -> positon = 10
프레임3: animate() -> isMoving = true -> positon = 15
[키를 뗌 - keyup 이벤트 발생]
프레임4: animate() -> isMoving = false -> positon = 15
프레임5: animate() -> isMoving = false -> positon = 15
프레임6: animate() -> isMoving = false -> positon = 15
[키를 누름 - keydown 이벤트 발생]
프레임7: animate() -> isMoving = true -> positon = 20
...무한 반복
*/
