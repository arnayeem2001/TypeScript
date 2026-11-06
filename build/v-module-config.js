const greetings1 = () => {
    console.log('Hello World');
};
const status = 'Nayeem143';
console.log(status);
const id1 = "nayeem143";
const id2 = 2001;
const role = "User";
const role1 = "Admin";
console.log(role1);
const user = { id: 143, role: 'Admin', previleges: ['create', 'delete'] };
const user1 = { id: 425, role: 'Member', startDate: new Date() };
console.log(user1);
console.log(user);
const user2 = { name: "Abdur Rahman Nayeem", role: 'Admin' };
const cat1 = {
    name: 'cutie',
    age: 3,
    breed: 'Persian'
};
const car = {
    brand: 'Toyota',
    model: 'Corolla'
};
const vehicle1 = {
    brand: 'Toyota',
    model: 'Corolla'
};
let hello = 'Hello World';
hello = 10;
hello.length;
let yellow = 'Hello World';
yellow = 10;
const draw1 = {
    name: 'Abdur Rahman Nayeem',
    role: 'Admin',
    Date: new Date()
};
const sayem = {
    designation: 'Software Engineer',
    focused: 'Frontend Developer'
};
const diu1 = {
    name: 'Abdur Rahman Nayeem',
    role: 'University'
};
const diu2 = {
    name: "Raisul Rayes",
    role: 'mentor'
};
let a = "Brain Station 23";
a = 34;
a.length;
const b = "Brain Station 23";
// b.length
let something;
const num = 10;
something = num;
const currentUser1 = null;
const anotherGreet = () => {
    console.log('Hello World');
    return undefined;
};
const greetings = anotherGreet();
console.log(greetings);
// let c:never=45
const getError = (message) => {
    throw new Error(message);
};
const x = getError('abc');
let someStat;
let sat = "Moderator";
const someStatusX = 'pending';
const showStatusX = (status) => {
    console.log(`The status is ${status}`);
};
showStatusX(someStatusX);
const config = {
    port: 3050
};
const currentPort = config.port;
const configuration = {
    port: 8080,
    prefix: '/api/v1'
};
let z = ['abd'];
console.log(typeof z === 'object');
const print = (value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};
const loggedInUser = {
    name: 'Abdur Rahman Nayeem',
    address: {
        street: '123 Main St',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error('User or address not found');
};
// const printAll=(x:string|string[]|null)=>{
//     if(x && typeof x==='object'){
//         for(let str of x){
//             console.log(str);
//         }
//     }
//     else if(typeof x==='string'){
//         console.log(x);
//     }else{
//         console.log('');
//     }
// }
// printAll(null);
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const printAll = (x) => {
    if (x !== null) {
        if (typeof x === 'object') {
            for (let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log('');
};
printAll('zahsq');
const move = (animal) => {
    if ('fly' in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
const date = new Date();
const err = new Error("Something went wrong");
console.log(date instanceof Date);
console.log(err instanceof Error);
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
showDate("12-12-2010");
const getArea = (shape) => {
    if (shape.kind === 'circle') {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray('ABC');
const numberArr = wrapInArray(123);
stringArr.map((item) => item.toUpperCase());
numberArr.map((item) => item.valueOf());
const userRes = {
    statusCode: 200,
    success: true,
    data: {
        name: 'sjds',
        role: 'sdsygd'
    }
};
const fetchUser = async () => {
    try {
        const res = await fetch('/api/v1/some-endpoint');
        const data = (await res.json());
        if (!res.ok || !data.success) {
            throw new Error(`Failed fetch user data: ${data.message}`);
        }
        return data.data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error('something went wrong');
        }
    }
};
const userData = await fetchUser();
if (userData) {
    console.log(userData.name);
}
export {};
