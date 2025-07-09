// XMLHttpRequest VS Fetch API
/*
- Fetch는 객체 생성 불필요
- 응답 처리 방식: Promise 기반(then, catch)
- 간결하고 가독성 좋음.
- 최신 표준 방식.
*/

// 1. Promise: 비동기 통신 결과를 즉시 알 수는 없지만, 결과가 준비되면 이행하거나, 거절될 것이라고 약속을 한다.
// pending(대기) => 요청을 보내고 응답을 기다리는 상태
// Fulfilled(성공)
// Rejected(실패)

// resolve: 작업이 성공했을 때
// reject: 작업이 실패했을 때
const orderCoffee = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isCoffeeReady = true;

    if (isCoffeeReady) {
      resolve("커피가 준비되었습니다.");
    } else {
      reject("커피가 준비되지 않았습니다.");
    }
  }, 1000);
});

orderCoffee
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("====커피 완료====");
  });

// then: 작업 성공, 다음 일 처리
// catch: 문제 발생, 어떻게 처리하지?
// finally: 결과가 어떻든 이제 마무리하자!

// 2. fetch
// option 객체
// method: HTTP 요청 메소드 -> GET, POST, PUT, DELETE 등
// headers: content-type, authorization, user-agent 등
// body: http 요청 바디, 전송하려는 실제 데이터

// (1) 상품 목록 조회
const result = fetch(
  "https://dev.wenivops.co.kr/services/fastapi-crud/1/product"
);
console.log(result);

function getProducts() {
  fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/product")
    .then((response) => {
      // 응답 객체를 받음
      console.log(response);
      //JSON 파싱 => 원하는 형식에 맞게 실제 데이터를 꺼내기 위함.
      return response.json();
    })
    .then((json) => {
      // 파싱 결과를 사용
      console.log(json);
    })
    .catch((error) => {
      // 오류가 발생한 경우 처리
      console.error(error);
    });
}
// getProducts();

// (2) 상품 생성 요청
function createProduct() {
  fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 10,
      productName: "[new] 개발 노트",
      price: 15000,
      stockCount: 10,
      thumbnailImg: "",
      option: [],
      discountRate: 0,
      shippingFee: 2500,
      detailInfoImage: [],
      viewCount: 100,
      pubDate: new Date().toISOString(),
      modDate: new Date().toISOString(),
    }),
  })
    .then((response) => {
      console.log("상품 생성", response);
      if (!response.ok) {
        throw new Error("상품 생성에 실패했습니다.");
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });
}

// createProduct();

// fetch는 네트워크 오류가 발생했을 때만 catch로 넘어감.(404, 500 등 HTTP 에러는 then에서 처리가 필요함.)

// CORS(교차 출처 리소스 공유): 웹 브라우저에서 다른 출처의 자원에 접근할 수 있도록 허용
// SOP(Same Origin Policy) 동일 출처 정책: 같은 프로토콜, 같은 도메인, 같은 포트에서만 리소스를 주고 받을 수 있다!
// 동일 출처가 아닐 경우 브라우저가 요청을 자동으로 차단!
// 이때 필요한게 CORS, 명시적으로 서버에서 허락해줘야 요청을 보내고 응답을 받을 수 있다!
async function loadPage() {
  try {
    const response = await fetch("https://www.naver.com");

    if (!response.ok) {
      throw new Error("HTTP 응답 실패");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("오류 발생:", error);
  }
}
// loadPage();

// 실습. 상품 ID를 통해 상품 상세 정보를 가져와 콘솔에 출력하세요!
// 요청 URL: https://dev.wenivops.co.kr/services/fastapi-crud/1/product/id
// 요청 방식: GET

function fetchProductById(id) {
  fetch(`https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${id}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("상품 조회를 실패했습니다.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(`${id} 상품 정보`, data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// fetchProductById(7);

// 실습. 상품 수정하기
// 요청 URL: https://dev.wenivops.co.kr/services/fastapi-crud/1/product/id
// 요청 방식: PUT

/*
(1) fetchProductById() 함수를 사용해서 기존 상품 데이터를 가져오세요
(2) 가져온 데이터에서 price만 새로운 가격으로 변경하세요
(3) 변경된 데이터를 PUT 요청으로 서버에 전송하세요
(4) 성공 시 "상품 수정 완료!" 메시지와 응답 데이터 출력
(5) 에러 발생 시 error 메시지 출력
*/

function fetchProductByIdV2(id) {
  return fetch(
    `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${id}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("상품 정보를 가져오지 못했습니다.");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}

function updateProductPrice(id, newPrice) {
  // (1) fetchProductById() 함수를 사용해서 기존 상품 데이터를 가져오세요
  fetchProductByIdV2(id)
    .then((productData) => {
      console.log("1. 상세 정보", productData);
      // (2) 가져온 데이터에서 price만 새로운 가격으로 변경하세요
      const updateProduct = {
        ...productData,
        price: newPrice,
      };

      // (3) 변경된 데이터를 PUT 요청으로 서버에 전송하세요
      return fetch(
        `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateProduct),
        }
      );
    })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("상품 수정에 실패했습니다");
      }
      return response.json();
    })
    .then((data) => {
      // (4) 성공 시 "상품 수정 완료!" 메시지와 응답 데이터 출력
      console.log("상품 수정 완료!", data);
    })
    .catch((error) => {
      // (5) 에러 발생 시 error 메시지 출력
      console.error(error);
    });
}
updateProductPrice(1, 20000);
