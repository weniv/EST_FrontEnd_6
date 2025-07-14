/*
로컬 스토리지를 이용한 메모장 서비스 만들기
- memo/index.html(완성된 템플릿, 스타일 미구현)
- memo/script.js (구현해야 할 기능, *주석 참고)
*/

// DOM 요소 선택
const memoForm = document.getElementById("memo-form");
const titleInput = document.getElementById("title-input");
const contentInput = document.getElementById("content-input");
const memoList = document.getElementById("memo-list");

// 전역 변수
let memoData = []; // 메모 데이터를 담는 배열
const MEMO_KEY = "memo"; // 로컬스토리지 키

/*
- 메모 객체 구조: {title: "메모 제목", content: "메모 내용"}
- memoData 배열 예시: [{ title: "메모1", content: "내용1"}, { title: "메모2", content: "내용2" }]

📌 모든 기능 구현이 부담스러워요!
- 일단 TODO 4번만 구현 (폼 제출 이벤트 -> 로컬스토리지에 데이터 저장)
- 시간이 남으면, TODO 1부터 순차적으로 구현해 보세요. :)
*/

// TODO 1: 페이지 로드 시 로컬스토리지에서 데이터 불러오기
function loadMemoStorage() {
  // 로컬스토리지에서 메모 데이터 가져오기 getItem
  const stored = localStorage.getItem(MEMO_KEY);

  // 데이터가 있다면 memoData 배열에 저장
  if (stored) {
    memoData = JSON.parse(stored);
  }
  // 화면에 메모 목록 출력
  renderMemo();
}

// TODO 2: 메모 목록을 화면에 출력하는 함수
function renderMemo() {
  // memoList 초기화
  memoList.innerHTML = "";

  // 메모가 없으면 "작성된 메모가 없습니다" 메시지 출력
  if (memoData.length === 0) {
    memoList.innerHTML = "<li>작성된 메모가 없습니다</li>";
    return;
  }

  // 메모가 있으면 반복문으로 각 메모를 화면에 출력
  memoData.forEach((memo, index) => {
    const memoItem = document.createElement("li");
    memoItem.innerHTML = `
      <h3>${memo.title}</h3>
      <p>${memo.content}</p>
      <button class="delete-button" type="button">삭제</button>
    `;

    // 삭제 버튼에 이벤트 리스너 추가
    memoItem
      .querySelector(".delete-button")
      .addEventListener("click", () => deleteMemo(index));

    memoList.appendChild(memoItem);
  });
}

// TODO 3: 로컬스토리지에 메모 데이터 저장하는 함수
function saveMemoStorage() {
  // memoData 배열을 JSON 문자열로 변환해서 로컬스토리지에 저장
  localStorage.setItem(MEMO_KEY, JSON.stringify(memoData));
}

// TODO 4: 폼 제출 이벤트 처리
memoForm.addEventListener("submit", (e) => {
  // 기본 제출 동작 방지
  e.preventDefault();

  // 입력값 가져오기 (trim() 사용)
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  // 제목이 비어있으면 경고 메시지
  if (!title) {
    alert("제목이 필요합니다!");
    return;
  }

  // 새 메모 객체를 memoData 배열 맨 앞에 추가
  // 예: memoData.unshift({ title: "제목", content: "내용" });
  memoData.unshift({
    title: title,
    content: content,
  });

  // 로컬스토리지 저장
  saveMemoStorage();

  // 입력 필드 초기화
  titleInput.value = "";
  contentInput.value = "";

  // 메모 목록 재렌더링
  renderMemo();
});

// TODO 5: 메모 삭제 함수 (선택 과제)
function deleteMemo(index) {
  // console.log(index);
  // 해당 인덱스의 메모를 배열에서 제거
  memoData.splice(index, 1);

  // 로컬스토리지 업데이트
  saveMemoStorage();

  // 메모 목록 재렌더링
  renderMemo();
}

// 페이지 로드 시 실행
loadMemoStorage();

/* [추가 기능 아이디어]
1. 메모 수정 기능: 기존 메모를 클릭해서 수정할 수 있는 기능
2. 메모 검색 기능: 제목이나 내용으로 메모를 검색하는 기능
3. 메모 정렬 기능: 날짜순, 제목순으로 정렬
4. 메모 카테고리: 메모를 분류할 수 있는 태그 추가하기(필터링 기능)
5. 메모 내보내기: 메모를 텍스트 파일로 다운로드
*/
