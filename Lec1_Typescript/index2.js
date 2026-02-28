"use strict";
//primitive datatypes
// let a : number;
// a=5;
// a="Ragni";
//  error->  
// PS C:\Users\hp\Desktop\AFS\Lec1_Typescript> npx tsc -b
// index2.ts:4:1 - error TS2322: Type 'string' is not assignable to type 'number'.
Object.defineProperty(exports, "__esModule", { value: true });
// 4 a="Ragni";
let a;
a = 5;
a = 10;
console.log(a);
let str;
// console.log(name);   //no value assigned
str = "ragni";
console.log(str);
// ismei js mei nan aat ahai tcs mei bug    -> tcs mei build nhi hoga agar build nhi hoga to run nhi hoga
let obj = {
    name: "Ragni",
    age: 20
};
console.log(obj.age);
function isAllowed(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
console.log(isAllowed(obj.age));
//# sourceMappingURL=index2.js.map