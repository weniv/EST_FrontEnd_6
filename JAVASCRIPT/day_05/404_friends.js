let friends = ["Irangi", "Shoopa"];

function isValidName(name) {
  const index = friends.indexOf(name);
  if (index === -1) {
    console.log(`${name}은 친구가 아닙니다.`);
    return false;
  }
  return index;
}

function addFriend(name) {
  // 친구이름이 중복되지않도록 처리, isValidName() 이용하기 -> index번호가 반환되면 친구추가 불가 'name은 이미 친구입니다'
  if (isValidName(name) !== false) {
    console.log(`${name}은 이미 친구입니다.`);
    return;
  }
  friends.push(name);
  console.log(`${name}이 친구로 추가되었습니다.`);
}

function deleteFriend(name) {
  // 유효성검사
  const index = isValidName(name); // false, index Number
  if (index === false) return;

  friends.splice(index, 1);
  console.log(`${name}님을 친구 목록에서 삭제했습니다.`);
}

function updateFriend(name, newName) {
  //유효성검사
  const index = isValidName(name); // false, index Number
  if (index === false) return;

  friends[index] = newName;
  console.log(`${name}님을 ${newName}님으로 이름을 변경했습니다.`);
}

// [ 'Irangi', 'Shoopa']
deleteFriend("Shoopa");
console.log(friends);

updateFriend("Irangi", "Ghost");
console.log(friends);

addFriend("Shoopa");
console.log(friends);

addFriend("Ghost");
console.log(friends);
