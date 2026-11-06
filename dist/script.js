const addtwo = (a, b) => {
    return a + b;
};
console.log(addtwo(10, 20));
const arr = ['a', 'b', 'c'];
const num = [1, 2, 3];
arr.push('d');
num.push(4);
console.log(arr);
console.log(num);
const arr1 = ['Abdur', 'Rahman', 'Nayeem'];
console.log(arr1);
//Tuple
const nayeem = ['Abdur Rahman Nayeem', 143];
// nayeem.push('Another value'); // This would cause a compile-time error since it's readonly
const stringCat = (firstname, lastname) => {
    if (!lastname) {
        return firstname;
    }
    return firstname + ' ' + lastname;
};
console.log(stringCat('Tanim'));
console.log(stringCat('Abu Bakar', 'Sayem'));
const greeting = (greeting = 'Assalamualaikum', fullname, text) => {
    console.log(greeting + ' ' + fullname);
    console.log(greeting + ' ' + fullname + ' ' + text);
};
greeting(undefined, 'Abu Bakar Sayem'); // This will work correctly
greeting(undefined, 'Tanim', undefined);
//rest parameters
const logUsers = (...args) => {
    const [name, age, isActive] = args;
    console.log(name + ' is ' + age);
};
logUsers('Abdur Rahman Nayeem', 25, true);
const sum = (...numbers) => {
    return numbers.reduce((total, sum) => total + sum, 0);
};
sum(50, 60);
const user1 = {
    name: 'Omar Faruk',
    age: 30,
    isActive: true,
    action: () => console.log('Assalamo alikom'),
    badge: ['Admin', 'Moderator'],
    address: {
        street: '123 Main St',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};
const user2 = {
    name: 'Usman Gani',
    age: 30,
    isActive: true,
    action: () => console.log('Assalamo alikom'),
    badge: ['Admin', 'Moderator'],
    address: {
        street: '123 Main St',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};
import './v-module-config.js';
