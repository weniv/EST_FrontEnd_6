const REST_API_KEY = "db62959ae64b80a7a0e5e762caf7c728";
const BOOK_URL = "https://dapi.kakao.com/v3/search/book";

// TODO 1: 무한 스크롤 상태 관리 변수 선언
let currentPage = 1; // 현재 페이지 번호
let currentQuery = ""; // 현재 검색어
let isLoading = false; // 로딩 상태
let hasMore = true; // 더 불러올 데이터가 있는지 여부
let observer = null; // IntersectionObserver 인스턴스

// DOM 요소 선택
const $bookList = document.getElementById("book-list");
const $loading = document.getElementById("loading");
const $searchForm = document.getElementById("search-form");
const $searchInput = document.getElementById("search-input");
const $observerTarget = document.getElementById("observer-target");

// TODO 2: IntersectionObserver 설정 함수
function setupIntersectionObserver() {
  // 2-1. IntersectionObserver 생성
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      // entry.isIntersecting이 true이고, hasMore가 true이고, 로딩 중이 아니고, 검색어가 있을 때
      if (entry.isIntersecting && hasMore && !isLoading && currentQuery) {
        loadMoreBooks();
      }
    },
    {
      // 2-2. 옵션 설정
      rootMargin: "100px", // 스크롤이 바닥에 닿기 100px 전에 미리 로딩
    }
  );

  // 2-3. observer-target 요소 관찰 시작
  observer.observe($observerTarget);
}

// TODO 3: 첫 번째 검색 함수 (기존 searchBooks에서 API 요청 로직 분리)
async function searchBooks() {
  // 검색어 가져오기
  const query = $searchInput.value.trim();

  // 빈 검색어 확인
  if (query === "") {
    alert("검색어를 입력해주세요!!");
    $searchInput.focus();
    return;
  }

  // 3-1. 상태 초기화
  currentPage = 1;
  currentQuery = query;
  hasMore = true;
  $bookList.innerHTML = ""; // 기존 책 목록 초기화

  // 3-2. fetchBooks 함수 호출
  await fetchBooks(true);
}

// TODO 4: 추가 데이터 로딩 함수
async function loadMoreBooks() {
  // 4-1. 로딩 중이거나 더 불러올 데이터가 없으면 return
  if (isLoading || !hasMore) {
    return;
  }

  // 4-2. 다음 페이지로 설정
  currentPage++;

  // 4-3. fetchBooks 함수 호출
  // 추가 로딩이므로 false 전달)
  await fetchBooks(false);
}

// TODO 5: API 호출 및 데이터 처리 함수
async function fetchBooks(isFirstSearch = true) {
  // 5-1. 로딩 상태 설정
  isLoading = true;

  // 5-2. 로딩 표시
  $loading.classList.add("active");

  try {
    // API 호출
    const response = await fetch(
      `${BOOK_URL}?query=${encodeURIComponent(
        currentQuery
      )}&page=${currentPage}&size=10`,
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
        },
      }
    );

    // 응답 상태 확인
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // JSON 데이터 변환
    const data = await response.json();

    // 5-3. 검색 결과가 없을 때 처리
    if (data.documents.length === 0) {
      if (isFirstSearch) {
        $bookList.innerHTML = "<li>검색 결과가 없습니다.</li>";
      }
      hasMore = false;
      return;
    }

    // 5-4. 책 목록 렌더링 (renderBooks 함수 호출, isFirstSearch 전달)
    renderBooks(data.documents, isFirstSearch);

    // 5-5. hasMore 상태 업데이트 (data.meta.is_end 활용)
    hasMore = !data.meta.is_end;

    // 5-6. 첫 번째 검색이면 페이지 맨 위로 스크롤
    if (isFirstSearch) {
      window.scrollTo(0, 0);
    }
  } catch (error) {
    // 5-7. 에러 처리
    console.error("검색 실패", error);
    if (isFirstSearch) {
      $bookList.innerHTML = "<li>검색 중 오류가 발생했습니다.</li>";
    }
    hasMore = false;
  } finally {
    // 5-8. 로딩 상태 해제 (isLoading = false, 숨김 처리)
    isLoading = false;
    $loading.classList.remove("active");
  }
}

// TODO 6: 책 목록 렌더링 함수 수정
function renderBooks(books, isFirstSearch = true) {
  // 6-1. 첫 번째 검색이면 기존 목록 초기화
  if (isFirstSearch) {
    $bookList.innerHTML = "";
  }

  // 6-2. 각 책 정보를 li 요소로 생성하여 추가
  books.forEach((book) => {
    const bookItem = document.createElement("li");
    bookItem.innerHTML = `
      <h3>${book.title}</h3>
      <img src="${book.thumbnail}" alt=""/>
      <p> 저자: ${book.authors.join(", ")}</p>
    `;

    $bookList.appendChild(bookItem);
  });
}

// 폼 제출 이벤트
$searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchBooks();
});

// TODO 7: 페이지 로드 시 초기화
// DOMContentLoaded 이벤트에서 setupIntersectionObserver 함수 호출
document.addEventListener("DOMContentLoaded", () => {
  setupIntersectionObserver();
});

// 페이지 떠날 때 Observer 해제 (메모리 누수 방지)
window.addEventListener("beforeunload", () => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
