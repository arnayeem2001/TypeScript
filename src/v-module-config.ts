export {};

const greetings1=()=>{
    console.log('Hello World');
}
// greetings1()

//literal type
type Status="Nayeem143"
const status:Status='Nayeem143'
console.log(status)

//basic union type
type Identity=string|number
const id1:Identity="nayeem143"
const id2:Identity=2001

//literal union type
type Role="Admin"|"Moderator"|"User"
const role:Role="User"
const role1:Role="Admin"
console.log(role1)

type Admin1={ id:number; role:'Admin'; previleges:string[]}
type Member={id:number; role:'Member'; startDate:Date}
type MUser=Admin1|Member
const user:MUser={id:143, role:'Admin', previleges:['create','delete']}
const user1:MUser={id:425,role:'Member', startDate:new Date()}
console.log(user1)
console.log(user)

//type alias

type Role2="Admin"|"Manager"
interface IRole{
    name:string;
    role:Role2;
}
const user2:IRole={name:"Abdur Rahman Nayeem", role:'Admin'}
interface animal{
    name:string;
    age:number;
}
interface cat extends animal{
    breed:string;
}
const cat1:cat={
    name:'cutie',
    age:3,
    breed:'Persian'
}

type vehicle={
    brand:string;
}
type car=vehicle & {
    model:string;
}
const car:car={
    brand:'Toyota',
    model:'Corolla'
}

interface Ivehicle{
    brand:string;
}
interface Ivehicle{
    model:string;
}
const vehicle1:Ivehicle={
    brand:'Toyota',
    model:'Corolla'
}
let hello:any='Hello World'
hello=10
hello.length

let yellow:unknown='Hello World'
yellow=10
// yellow.length

type draw=string;
interface Idaw{
    name:string;
    role:string;
    Date:Date;
}
const draw1:Idaw={
 name:'Abdur Rahman Nayeem',
 role:'Admin',
 Date:new Date()   
}

interface Sayem{
    designation:string;
}
interface Nayeem extends Sayem{
    focused:string;
}
const sayem:Nayeem={
    designation:'Software Engineer',
    focused:'Frontend Developer'
}

type insight={
    name:string;
}
type diu=insight & {
    role:string;
}
const diu1:diu={
    name:'Abdur Rahman Nayeem',
    role:'University'
}

interface insight1{
    name:string;
}
interface insight1{
    role:string;
}
const diu2:insight1={
    name:"Raisul Rayes",
    role:'mentor'
}

let a:any="Brain Station 23"
a=34;
a.length
const b:unknown="Brain Station 23"
// b.length
let something:unknown;
const num:number=10;
something=num;

interface user{
    name:string;
}
type logedInUser=user|null;
const currentUser1:logedInUser=null;

const anotherGreet=():undefined=>{
    console.log('Hello World');
    return undefined;
}
const greetings:void=anotherGreet()
console.log(greetings)

// let c:never=45

const getError=(message:string):never=>{
    throw new Error (message);
};
const x:null=getError('abc')

type stat="Admin"|"Moderator"
let someStat:string;
let sat:stat="Moderator"


type statusX="pending"|"active"|"inactive"
const someStatusX:statusX='pending'
const showStatusX=(status:statusX)=>{
    console.log(`The status is ${status}`);
}
showStatusX(someStatusX as statusX)

interface Config{
    port?:number;
}
const config:Config={
    port:3050
};
const currentPort:number=config.port!;

const configuration={
    port:8080,
    prefix:'/api/v1'
}as const;

let z=['abd']
console.log(typeof z==='object')

const print=(value:string|number)=>{
    if(typeof value==='string'){
        return value.toUpperCase();
    }
    else
    {
        return value;
    }
}

type User={
    name:string;
    address?:{
        street:string;
        city:string;
        country:string;
    }
}|null;
const loggedInUser:User={
    name:'Abdur Rahman Nayeem',
    address:{
        street:'123 Main St',
        city:'Dhaka',
        country:'Bangladesh'
    }
}
const showAddress=(user:User)=>{
    if(user&&user.address){
        console.log(user.address.street);

        return;
    }
    throw new Error ('User or address not found');
}
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

const compare=(x:number|string,y:number|boolean)=>{
    if(x===y){
        console.log(x,y);
    }
}
const printAll=(x:string|string[]|null)=>{
    if(x!==null){
        if(typeof x==='object'){
            for(let str of x){
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log('')
}
printAll('zahsq')

type Bird={fly:()=>void}
type Fish={swim:()=>void}
const move=(animal:Bird |Fish)=>{
    if('fly' in animal){
        animal.fly()
        return
    }
    animal.swim()
}

const date=new Date()
const err= new Error("Something went wrong")
console.log(date instanceof Date)
console.log(err instanceof Error)

const showDate=(x:Date|string)=>{
    if(x instanceof Date){
        console.log(x.toISOString());
        return;
    }
    const date=new Date(x)
    console.log(date.toISOString())
}
showDate("12-12-2010")
interface circle{
    kind:'circle'
    radius:number
}
interface square{
    kind:'square'
    sideLength:number
}
const getArea=(shape:circle|square)=>{
    if(shape.kind==='circle'){
        console.log(shape.radius)
    }else{
        console.log(shape.sideLength)
    }
}

const wrapInArray=<T>(value:T)=>{
    return [value]
}
const stringArr=wrapInArray<string>('ABC')
const numberArr=wrapInArray<number>(123)

stringArr.map((item)=> item.toUpperCase())
numberArr.map((item)=>item.valueOf())

interface UserR{
        name:string;
        role:string;
}
interface Blog{
        title:string
        description:string
        date:Date
}
interface ApiResponse<T>{
    data:T
    success:boolean
    statusCode:number
    message?: string;
}
type UserRespose=ApiResponse<UserR>
type BlogResponse=ApiResponse<Blog>

const userRes:ApiResponse<UserR>={
    statusCode:200,
    success:true,
    data:{
        name:'sjds',
        role:'sdsygd'
    }
}

const fetchUser=async():Promise<UserR|undefined> => {
    try{
        const res=await fetch('/api/v1/some-endpoint')
        const data=(await res.json())as ApiResponse<UserR>

        if(!res.ok||!data.success){
            throw new Error(`Failed fetch user data: ${data.message}`)
        }
        return data.data;
    }catch(error){
        if(error instanceof Error){
            console.error(error.message)
        }else{
            console.error('something went wrong')
        }
    }

}
const userData=await fetchUser()
if(userData){
    console.log(userData.name)
}