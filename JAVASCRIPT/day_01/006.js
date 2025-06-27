//  var 변수 스코프(함수)
function scope() {
  var a = "Hello";
  if (true) {
    var a = "World";
    console.log(a);
  }
  console.log(a);
}
scope();

// 변수 스코프(블럭) - let, const
function scope2() {
  let b = "Hello";
  if (true) {
    let b = "World";
    console.log(b);
  }
  console.log(b);
}
scope2();
