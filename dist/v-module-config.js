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
export {};
