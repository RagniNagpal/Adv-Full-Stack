"use strict";
//enum --> set of constant values
Object.defineProperty(exports, "__esModule", { value: true });
function addProduct(role) {
    if (role === "user") {
        return "not authorize";
    }
    //logic to add product
    return "product added";
}
addProduct("admin");
addProduct("user");
// addProduct("ghjk");
//enum
//default 0 1 agla 2
// enum UserRole{
//   user=1,
//   admin
// }
var UserRole;
(function (UserRole) {
    UserRole["user"] = "user";
    UserRole["admin"] = "admin";
})(UserRole || (UserRole = {}));
console.log(UserRole.user);
console.log(UserRole.admin);
function addProduct2(role) {
    if (role === "user") {
        return "not authorize";
    }
    //logic to add product
    return "product added";
}
addProduct2(UserRole.admin);
addProduct2(UserRole.user);
//# sourceMappingURL=enum.js.map