let obj = {
  name :"Ragni"
}
console.log(obj.age);
function isAllowed(age){
  if(age > 18){
    return true;
  }
  return false;
}
console.log(isAllowed(obj.age));