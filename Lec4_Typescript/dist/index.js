"use strict";
//type narrowing 
Object.defineProperty(exports, "__esModule", { value: true });
//union --type widening
function someValue(arg) {
    if (typeof arg == "string") {
        return arg.toLowerCase();
    }
    return arg;
}
someValue("ABCDEFGH");
someValue(12345);
someValue(true);
let e = {
    name: "sdf",
    empId: "sdfgh",
    salary: 23456,
    projectId: "thn"
};
function returnPhone(arg) {
    if ("phone" in arg) {
        return arg.phone;
    }
    return 0;
}
returnPhone(e);
//instance of
//# sourceMappingURL=index.js.map