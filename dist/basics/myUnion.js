"use strict";
let score = 35;
score = 'pop';
score = 45;
score = '55';
let ezechiel = { name: "Ezechiel", id: 243 };
ezechiel = { userName: "eze", id: 243 };
// function getDbId(id: number | string) {
//   // making some API calls
//   console.log(`DB id is: ${id}`)
// }
getDbId(33);
getDbId("45");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Array
const data = [1, 2, 3];
const data1 = ['1', '2', '3'];
const data3 = ['1', '4', 6, true];
let seatAllotment;
seatAllotment = 'aisle';
// seatAllotment = "crew"
