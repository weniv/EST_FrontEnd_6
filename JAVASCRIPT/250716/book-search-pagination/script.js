const REST_API_KEY = "db62959ae64b80a7a0e5e762caf7c728";
const BOOK_URL = "https://dapi.kakao.com/v3/search/book";

// TODO 1: 페이지네이션 상태 관리 변수 선언
let currentPage = 1; // 현재 페이지 번호
let totalPages = 1; // 전체 페이지 수
let currentQuery = ""; // 현재 검색어

// DOM 요소 선택
const $bookList = document.getElementById("book-list");
const $pagination = document.getElementById("pagination");
const $searchForm = document.getElementById("search-form");
const $searchInput = document.getElementById("search-input");

// TODO 2: 책 검색 함수 수정 (페이지네이션 기능 추가)
async function searchBooks(page = 1) {
  // 2-1. 검색어 가져오기
  const query = $searchInput.value.trim();

  // 2-2. 빈 검색어 체크
  if (query === "") {
    alert("검색어를 입력해주세요!");
    $searchInput.focus();
    return;
  }

  // 2-3. 첫 번째 페이지일 때만 currentQuery 업데이트
  if (page === 1) {
    currentQuery = query;
  }

  try {
    // 2-4. fetch 요청 URL에 page 파라미터 추가
    const response = await fetch(
      `${BOOK_URL}?query=${encodeURIComponent(
        currentQuery
      )}&page=${page}&size=10`,
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    // 2-5. 검색 결과 없을 때 처리
    if (data.documents.length === 0) {
      $bookList.innerHTML = "<li>검색 결과가 없습니다.</li>";
      // 페이지네이션 숨기기 => 초기화
      $pagination.innerHTML = "";
      return;
    }

    // 책 검색 결과
    renderBooks(data.documents);

    // 2-7. 페이지 이동 시 맨 위로 스크롤
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 2-8. 페이지네이션 정보 업데이트
    // totalPages(data.meta.pageable_count 활용)
    // totalPages: 전체 페이지 수, page의 최댓값은 50
    totalPages = Math.min(50, Math.ceil(data.meta.pageable_count / 10));
    /**
     * size=10 => 데이터를 요청했을 때 10씩(를) 받겠다
     * [page: 1, data:[size 10]]/[page: 2, data:[size 10, id: 11~20]]/ [][][][]
     * 전체 개수: 100 => 100 / 10 => 총 10개의 페이지
     * 101개 => 101 / 10 = 10.1 => 총 11개의 페이지
     * 1000개 => 1000 / 10 = 100 => 총 100개의 페이지
     * (50, 100) => 50
     *
     */

    // currentPage 업데이트
    currentPage = page;
    // 페이지네이션 렌더링 함수 호출
    renderPagination();
  } catch (error) {
    console.error("검색 실패:", error);
    $bookList.innerHTML = "<li>검색 중 오류가 발생했습니다.</li>";
    // 에러 시 페이지네이션 숨기기
    $pagination.innerHTML = "";
  }
}

// 폼 제출 이벤트
$searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchBooks(1);
});

// 책 목록 렌더링 함수
function renderBooks(books) {
  $bookList.innerHTML = "";

  books.forEach((book) => {
    const bookItem = document.createElement("li");
    bookItem.innerHTML = `
      <h3>${book.title}</h3>
      <img src="${book.thumbnail}" alt=""/>
      <p>저자: ${book.authors.join(", ")}</p>
    `;
    $bookList.appendChild(bookItem);
  });
}

// TODO 3: 페이지네이션 렌더링 함수 구현 => 동적으로 버튼을 생성하는 함수
function renderPagination() {
  // 3-1. 기존 페이지네이션 초기화
  $pagination.innerHTML = "";

  // 3-2. 페이지가 1개 이하면 페이지네이션 숨기기 => 버튼 생성 작업을 하지 않는 것!
  if (totalPages <= 1) {
    return;
  }

  // 3-3. 이전 버튼 생성 (현재 페이지가 1보다 클 때만)
  if (currentPage > 1) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "이전";
    prevBtn.addEventListener("click", () => searchBooks(currentPage - 1));
    $pagination.appendChild(prevBtn);
  }

  // 3-4. 페이지 번호 버튼 생성 (최대 5개)
  // startPage와 endPage 계산
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  /*
  현재 페이지: 2
  total: 20
  start: 1
  endPage: 5
  => 1 2 3 4 5
  버튼 1: searchBooks(1)
  버튼 2: searchBooks(2) button.active
  */

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;

    // 현재 페이지면 active 클래스 추가
    if (i === currentPage) {
      pageBtn.classList.add("active");
    }

    pageBtn.addEventListener("click", () => searchBooks(i));
    $pagination.appendChild(pageBtn);
  }

  // 3-5. 다음 버튼 생성 (현재 페이지가 마지막 페이지가 아닐 때만)
  if (currentPage < totalPages) {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "다음";
    nextBtn.addEventListener("click", () => searchBooks(currentPage + 1));
    $pagination.appendChild(nextBtn);
  }
}
