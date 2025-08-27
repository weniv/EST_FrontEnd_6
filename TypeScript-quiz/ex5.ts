interface FullUser {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
  createdAt: Date;
}

// 1. 사용자 생성시 필요한 정보만 받는 타입 (id, createdAt 제외)
type CreateUserData = Omit<FullUser, 'id' | 'createdAt'>;

// 2. 사용자 업데이트시 부분적으로 수정 가능한 타입 (id 제외)
type UpdateUserData = Partial<Omit<FullUser, 'id'>>;

// 3. 공개 프로필용 타입 (password 제외)
type PublicUser = Omit<FullUser, 'password'>;

// 4. 로그인 정보만 담는 타입
type LoginData = Pick<FullUser, 'email' | 'password'>;

// 함수들을 구현하세요
function createUser(userData: CreateUserData): FullUser {
  // 구현하세요 (id와 createdAt은 자동 생성)
  const result: FullUser = {
    ...userData,
    id: Math.floor(Math.random() * 1000),
    createdAt: new Date()
  } 
  return result;
}

function getPublicProfile(user: FullUser): PublicUser {
  // 구현하세요
  const { password, ...publicUser } = user;
  return publicUser;
}