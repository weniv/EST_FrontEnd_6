type Author = {
    name: string;
    age: number;
    password: string;
    birth: string;
    phone: string;
    email: string;
}
 
type pickAuthor = Pick<Author, 'name' | 'age' | 'birth' | 'phone'>;
 
const author: pickAuthor = {
    name: 'licat',
    age: 30,
}
 
console.log(author);