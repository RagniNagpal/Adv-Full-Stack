//type narrowing 

//union --type widening

function someValue(arg:string | number | boolean){
  if(typeof arg == "string"){
    return arg.toLowerCase();
  }
  return arg;
}

someValue("ABCDEFGH");
someValue(12345);
someValue(true);

interface Emp{
  name:string,
  empId:string,
  salary:number,
  phone:number
}

interface TeamLead{
  name:string,
  empId:string,
  salary:number,
  projectId:string
}

type EmpOrTeamLead=Emp | TeamLead;
let e:EmpOrTeamLead={
  name:"sdf",
  empId:"sdfgh",
  salary:23456,
  projectId:"thn"
}

function returnPhone(arg:EmpOrTeamLead){
  if("phone" in arg){
    return arg.phone;
  }
  return 0;
}
returnPhone(e);
//instance of