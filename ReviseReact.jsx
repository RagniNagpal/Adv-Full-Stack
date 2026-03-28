//lecture 10 React
// what are lifecycle phases of react
//react component
//there are 3 lifecycle phases in react

// import { useEffect } from "react"

// 1. Mountain phase 
// 2. Updating phase
// 3. Unmount phase

// 1. Mounting phase: when a component renders first time and painted on DOM then its called mounting phase
// App component , header component

// 2. Updating phase: when state or props of a component changes , component rerenders and that phase is called updating phase 

//3. Unmounting phase: when a component removes from the dom 

// frontned        (mounting)        server                     database
// Todo task    bUtton    post request               added to db


// print                    get req                    from db


//add to cart is updating phase

//unmounting eg
//let id=setInterval(()){,1000}      //har ek sec mei callback
//component unmount -> then setInterva;l ko clear wioth clearInterval(id);

// page parchange then state mei chnge

//class componnet:
// phases <-------work <---------these are lifecycle methods
//but these methods not present in functional components

// methods> componentdidMount(work)
//         componentdidupdatw(work)
//         componentdidunmount(work)
// 1. mounting
// 2. unmounting
// 3. updating 

//imp ques
//To manage all lifecycle phases in functional component we use hook called useEffect

// Syntax of useEffect
// useEffect((callback,[](dependency array(optional)))

// Case: 
// 1. If you didnt pass the dependency Array useEffect(callback)-> function will run on each re render
// 2. If you pass empty array callback will run on mounting phase (first re render)
// 3. If u paas some dependency [a,b,c]
// koi bhi ek change then callback will run on mounting phase as well as updating phase

 //agar strictmode tehn c=c+1 auto because strictmode useeffect(component) ki poori lifecycle chalaata hai mount ke baad component ko page then auto unmount then agar mount agar 2 se nhi to clear interval karna padega



 //lifting state up
//  data only pass thru parent to child 
//  sibling mei data pass nhi hota

// child to parent -> lifting state -> hota hai function use karke



//There is no built in method for craeting route we use react-router-dom library only for browser

// feature of react-> single page application
//react mei pages nhi bante compoennts bante hai


//st1 first topic
// GraphQl

//What problem does graphql solved?
//abb tak ham rest api use karte the....dikkat kya h phir  jab aham ek ka data nikalta hai pooor aaata hai name ke liye alag email ke liye alag problem is bandwidth .............jitna data utna bandwidth..cahahiye ek data tah abb overfetching or underfetching ho gyi .to solve this problem we use GraphQL.....taaki over aur under na ho 
// Its a query language
//GraphQL has only one single endpoint
//single endpoint ka query return karet hai 

//1. TypeDefination-> (sql mei table and non sql mei schema) its like a schema

// Type User{
//   id:ID
//   name:string
// }

//Type Query: function(kon kon si queries run kar sakte hai  saari define)

