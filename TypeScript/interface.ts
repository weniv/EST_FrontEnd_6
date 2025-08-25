interface Character {
  nickName: string;
}

interface Character {
  color: string;
}

// interface Character {
//     nickname: string;
//     color: string;
// }
 
interface Bird {
  fly: number;
}
 
interface BirdCharacter extends Character, Bird {
  level: number;
}
 
const birdChar: BirdCharacter = {
  nickName: "Gary",
  color: 'green',
  fly: 10,
  level: 1
};