1. JS 파일을 minify하면 가독성은 떨어지지만, 성능 향상에 도움이 된다.(O)
   => minify는 줄바꿈, 공백 등을 제거하여 파일 크기를 줄이고, 초기 로딩 속도를 개선합니다.

2. requestAnimationFrame은 브라우저의 렌더링 타이밍과 무관하게 일정한 간격으로 콜백을 실행한다.(X)
   => requestAnimationFrame은 브라우저 렌더링 주기와 동기화되어 호출되므로, 불필요한 렌더링을 방지하고 애니메이션을 부드럽게 만듭니다.

3. IntersectionObserver는 요소가 화면에 들어올 때만 콜백을 실행하므로, scroll 이벤트보다 성능이 좋다.(O)
   => scroll 이벤트는 스크롤 시 무조건 호출되지만, IntersectionObserver는 실제로 보일 때만 실행되므로 더 효율적입니다.

4. 변수가 더 이상 참조되지 않으면 JavaScript는 자동으로 메모리에서 이를 해제한다.(O)
   => JavaScript는 가비지 컬렉터를 통해 참조되지 않는 메모리를 자동으로 해제합니다. 단, 순환 참조 시 해제되지 않을 수 있습니다.
   => 순환 참조 문제를 해결하기 위해 최신 브라우저에서는 마크 앤 스위프 알고리즘을 사용한다.

5. DOM 구조나 속성이 변경되는 것을 감지하는 API는?
   => MutationObserver
   => childList, 속성 변경, 텍스트 변경 등을 실시간 감지할 수 있습니다.

6. MutationObserver를 사용할 때 성능을 고려해 설정해야 할 부분은 무엇인가요?
   => config 객체에서 감지할 변화 타입(attributes, childList 등)을 최소한으로 설정하여 감지 비용을 줄이는 것이 중요합니다.

7. DocumentFragment를 사용하면 어떤 성능상의 이점이 있나요?
   => 반복적으로 DOM을 조작할 때, 화면에 렌더링 되지 않는 메모리 상에서 요소를 조작하여, 실제 DOM에 한 번에 추가하므로 렌더링 횟수를 줄여 성능이 향상됩니다.
   => 즉, 불필요한 reflow나 repaint가 발생하지 않아 성능 최적화를 위해 사용된다.

8. 좋은 코딩 습관

- 배열이나 객체를 불변하는 객체처럼 다루기
- 엄격모드(strict mode)로 사용
- 일치연산자 사용

9. 불변 객체 스타일의 데이터 관리는 왜 메모리 최적화에 도움이 되나요?
   => 기존 데이터를 그대로 두고 새로운 객체를 생성하기 때문에 예측 가능한 메모리 흐름을 만들 수 있고, 불필요한 참조 유지로 인한 메모리 누수를 방지할 수 있습니다.
   => 예상치 못한 부작용(버그 발생 가능성)을 줄일 수 있다.

10. 아래 코드를 실행하면 콘솔에 무엇이 출력될까요?

```javascript
const observer = new MutationObserver((mutations) => {
  mutations.forEach((m) => console.log("변화 감지:", m.type));
});
observer.observe(target, { childList: true, attributes: true });

target.appendChild(document.createElement("li"));
```

=> 변화 감지: childList

11. 다음 코드에서 console.log는 몇 번 실행될까요?

```javascript
const ul = document.getElementById("list");

const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => console.log("변화 감지됨"));
});

observer.observe(ul, { childList: true });

for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  ul.appendChild(li);
}
```

=> 5번
=> childList: true로 감시 중이며, appendChild가 5번 실행되므로 각 변화마다 callback이 실행됩니다.
