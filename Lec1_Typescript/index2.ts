//primitive datatypes
// let a : number;
// a=5;
// a="Ragni";
//  error->  
// PS C:\Users\hp\Desktop\AFS\Lec1_Typescript> npx tsc -b
// index2.ts:4:1 - error TS2322: Type 'string' is not assignable to type 'number'.

// 4 a="Ragni";
  
let a: number;

a = 5;
a = 10;   
console.log(a);

let str:string;
// console.log(name);   //no value assigned
str="ragni";
console.log(str);


// ismei js mei nan aat ahai tcs mei bug    -> tcs mei build nhi hoga agar build nhi hoga to run nhi hoga
let obj = {
  name :"Ragni",
  age:20
}
console.log(obj.age);
function isAllowed(age:number){
  if(age > 18){
    return true;
  }
  return false;
}
console.log(isAllowed(obj.age));

// how to provide function return type


function sum(a:number, b:number):number{
  return a+b;
}
sum(1,2);


//bydefault data type---> any
function sum2(a:number, b:string){
  return a+b;
}
sum2(1,"2");

//intilicitely any 
let num1:any;
num1=1;
num1="rags";

//explicitely any 
let num;
num=3;
num="4";