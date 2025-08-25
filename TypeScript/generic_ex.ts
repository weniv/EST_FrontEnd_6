function getFirstElement<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[0] : undefined;
}
 
// 사용 예시
const numberArr = [1, 2, 3];
const firstNumber = getFirstElement(numberArr); // 타입: number | undefined
 
const strings = ["a", "b", "c"];
const firstString = getFirstElement(strings); // 타입: string | undefined
 
const empty: number[] = [];
const noElement = getFirstElement(empty); // 타입: number | undefined, 값: undefined
 
console.log(firstNumber);
console.log(firstString);
console.log(noElement);

interface DataStorage<K extends string | number, V> {
    setItem(key: K, value: V): void;
    getItem(key: K): V | undefined;
}
 
class CustomStorage<K extends string | number, V> implements DataStorage<K, V> {
    private data: Record<string, V> = {};
 
    setItem(key: K, value: V): void {
        this.data[String(key)] = value;
    }
 
    getItem(key: K): V | undefined {
        return this.data[String(key)];
    }
}
 
// 사용 예시
const storage = new CustomStorage<string | number, string>();
storage.setItem("name", "licat");
storage.setItem(1, "mura");
console.log(storage.getItem("name"));
console.log(storage.getItem(1));