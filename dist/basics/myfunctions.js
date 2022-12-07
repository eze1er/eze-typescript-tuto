"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 2;
    return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
let loginUser = (name, email, isPaid = false) => {
};
// addTwo(5);
let myValue = addTwo(5);
getUpper("ezechiel");
signUpUser("Ezechiel", "ezechiel@gmail.com", false);
loginUser("Eze", "eze@gmail.com");
// function getValue(myVal: number){
//   if (myVal > 5 ) {
//     return true
//   }
//   return"200 ok"
// }
const getHello = (s) => {
    return "";
};
const heros = ["author", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
