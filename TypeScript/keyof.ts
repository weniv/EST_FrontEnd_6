interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}
 
// Product의 모든 키를 타입으로 추출
type ProductKeys = keyof Product; // "id" | "name" | "price" | "category"
 
const data: ProductKeys = "id"; 
// 여기에 "name", "price", "category" 등 다른 값을 사용할 수 있습니다.
// 다만 1000, "hello" 등의 key가 아닌 경우에는 사용할 수 없습니다.
 
// 실제 활용 예제
function getProductValue(product: Product, key: keyof Product) {
    return product[key];
}
 
const laptop: Product = {
    id: 1,
    name: "노트북",
    price: 1000000,
    category: "전자기기"
};
 
console.log(getProductValue(laptop, "name")); // "노트북"
console.log(getProductValue(laptop, "invalid")); // 컴파일 에러!