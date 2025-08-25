function add(a: number, b?: number): number {
  if (b) {
    return a + b;
  }
  return a;
}

type MathFunction = (x: number, y: number) => number;
const divide: MathFunction = (x, y) => x / y;