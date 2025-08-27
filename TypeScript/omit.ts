type Author = {
    name: string;
    age: number;
    password: string;
    birth: string;
    phone: string;
    email: string;
}
 
type omitAuthor = Omit<Author, 'age' | 'password' | 'birth' | 'phone' | 'email'>;
 
const author: omitAuthor = {
    name: 'licat',
}
 
console.log(author);