// arg---> string[] or number[]

type strOrNum=string | number
function firstValue(arg : strOrNum[]){
  return arg[0]
}

let val=firstValue(["a","b","c"]);
let val2=firstValue([1,2,3]);
let val3=firstValue([1,"b",3])


//val---? a-> A;  error kyunki isko pta nhi h ki string h num h undefined h 
// val.toUpperCase();   //returning arr[0]


//generic
//type preserve
function firstValue2<T>(arg:T[]){
  return arg[0];
}

// while going through union the type of output is not preserved 
// to overcome this problem we use generic type function.
// we are definig the 
let resultVal=firstValue2<string>(["a","b","c"]);
let resultVal2=firstValue2<number>([1,2,3,4]);
let resultVal3=firstValue2<string>([])
resultVal?.toUpperCase();
resultVal2?.toString();

//HashMap<> map = new HashMap<>();
//jaise ismei integerb alag character alag 

//?
//requirement--> if user dont want phone then
interface User{
  readonly name:string,
  email:string,
  phone?:number  //? means optional
}

//complex
// interface User2{
//   name:string,
//   email:string,
// }

let user:User ={
  name:"fghjkl",
  email:"gh",
  phone:12345
}

let user2:User ={
  name:"fgl",
  email:"ghl",
  // phone:undefined
}

console.log(user2.phone)

//read only is like const cant change like final
