const addtwo = (a: number, b: number): number => {
    return a + b;
};
console.log(addtwo(10,20));

const arr:string[]=['a','b','c'];
const num:number[]=[1,2,3];
arr.push('d');
num.push(4);
console.log(arr);
console.log(num);
const arr1:Array<string>=['Abdur','Rahman','Nayeem'];
console.log(arr1);

//Tuple

const nayeem:readonly[string,number]=['Abdur Rahman Nayeem', 143];
// nayeem.push('Another value'); // This would cause a compile-time error since it's readonly

const stringCat=(firstname:string,lastname?:string)=>{
    if(!lastname){
        return firstname;
    }
    return firstname+' '+lastname;
}
console.log(stringCat('Tanim'))
console.log(stringCat('Abu Bakar','Sayem'))

const greeting=(greeting:string='Assalamualaikum',fullname?:string,text?:"Welcome"):void=>{
    console.log(greeting+' '+fullname);
    console.log(greeting+' '+fullname+' '+text);
}
greeting(undefined, 'Abu Bakar Sayem'); // This will work correctly
greeting(undefined,'Tanim',undefined);

//rest parameters
const logUsers=(...args:[name:string,age:number,isActive:boolean])=>{
    const[name,age,isActive]=args;
    console.log(name+ ' is ' + age)
}
logUsers('Abdur Rahman Nayeem', 25, true);

const sum=(...numbers:number[])=>{
    return numbers.reduce((total,sum)=>total+sum,0);
}
sum(50,60);

//objects
type Users={
    name:string;
    age:number;
    isActive:boolean;
    action:()=>void;
    badge:string[];
    address:Address;
}

interface IUsers{
    name:string;
    age:number;
    isActive:boolean;
    action:()=>void;
    badge:string[];
}

type UserName=string;
//interface UserName1=string;
type Address={
    street:string;
    city:string;
    country:string;
}

const user1:Users={
    name:'Omar Faruk',
    age:30,
    isActive:true,
    action:()=>console.log('Assalamo alikom'),
    badge:['Admin','Moderator'],
    address:{
        street:'123 Main St',
        city:'Dhaka',
        country:'Bangladesh'
    }
}
const user2:Users={
    name:'Usman Gani',
    age:30,
    isActive:true,
    action:()=>console.log('Assalamo alikom'),
    badge:['Admin','Moderator'],
    address:{
        street:'123 Main St',
        city:'Dhaka',
        country:'Bangladesh'
    }
}

import './v-module-config.js';
