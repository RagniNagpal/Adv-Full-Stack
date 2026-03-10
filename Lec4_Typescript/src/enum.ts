//enum --> set of constant values

//union
type Role = "user" | "admin"
function addProduct(role:Role):string{
  if(role==="user"){
    return "not authorize"
  }
  //logic to add product
  return "product added"
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

enum UserRole{
  user="user",
  admin="admin"
}

console.log(UserRole.user)
console.log(UserRole.admin)
function addProduct2(role:UserRole):string{
  if(role==="user"){
    return "not authorize"
  }
  //logic to add product
  return "product added"
}
addProduct2(UserRole.admin);
addProduct2(UserRole.user);



//do by yourself
//utility functions
// https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype