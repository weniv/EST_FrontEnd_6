// async, await
// async: 키워드를 붙이면 Promise 객체를 반환하는 함수
async function test() {
  return "Hello world";
  // return Promise.resolve("Hello World");
}

console.log(test());

// await: Promise가 처리될 때까지 기다린다!! => 함수 실행이 일시정지!
// 이 코드는 비동기 코드지만 한 줄씩 순차적으로 실행된다.
async function message() {
  console.log("1. 함수 시작");

  const hello = await new Promise((resolve) => {
    console.log("2. Promise 생성");
    setTimeout(() => {
      console.log("3. setTimeout 콜백 실행");
      resolve("hello");
    }, 1000);
  });

  // 함수 실행 재개
  console.log("4. hello 값 받음", hello);

  const world = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("world");
    }, 0);
  });

  // 함수 실행 재개
  console.log("5. world 값 받음", world);
  console.log(`6. ${hello} ${world}`);
}

message();

// console.log("message 함수 밑에 있어요!!");

/*
// promise로 작성했을 경우
function message() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  }).then((hello) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${hello} world`);
      }, 1000);
    });
  }).then((result) => {
    console.log(result);
  });
}
message();
*/

async function getProducts() {
  try {
    const response = await fetch(
      "https://dev.wenivops.co.kr/services/fastapi-crud/1/product"
    );

    if (!response.ok) {
      throw new Error("상품 목록 조회 실패");
    }

    const data = await response.json();
    console.log("상품 목록", data);
  } catch (error) {
    console.error("오류 발생", error);
  }
}
getProducts();

/* Promise 체이닝을 사용한 상품 상세 정보 조회
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
*/

// 상품 ID가 productId인 상품을 삭제하는 요청
async function deleteProduct(productId) {
  try {
    const response = await fetch(
      `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${productId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("삭제 실패");
    }

    const data = await response.json(); // Promise 객체 반환
    console.log("삭제 완료", data);
  } catch (error) {
    console.error("삭제 중 오류", error);
  }
}

// deleteProduct(2);

/* Promise 체이닝 방식!(then(), catch())
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
*/

async function createProduct() {
  try {
    const response = await fetch(
      "https://dev.wenivops.co.kr/services/fastapi-crud/1/product",
      {
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
      }
    );

    if (!response.ok) {
      throw new Error("상품 생성 실패");
    }

    const data = await response.json();
    console.log("생성 결과", data);
  } catch (error) {
    console.error(error);
  }
}

createProduct();

/*
- Promise 체이닝 복잡해질 때
- 중간 결과를 변수에 저장해야 할 때
*/

/*
[퀴즈] console.log() 출력 순서!
*/

// start - a - b - end
// start - end - b -a

async function run() {
  console.log("1. Start");

  const a = await new Promise((resolve) =>
    setTimeout(() => resolve("A"), 1000)
  );
  console.log("2.", a);

  const b = await new Promise((resolve) => setTimeout(() => resolve("B"), 500));
  console.log("3.", b);
}
run();
console.log("4. End");
