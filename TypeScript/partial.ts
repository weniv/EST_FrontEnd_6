type Author = {
    name: string;
    age: number;
    password: string;
    birth: string;
    phone: string;
    email: string;
}
 
type partialAuthor = Partial<Author>;
 
const author: partialAuthor = {
    name: 'licat',
    age: 30
}
const authorEmpty: partialAuthor = {};
 
console.log(author);
console.log(authorEmpty);