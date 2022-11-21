let score: number | string = 35

score = 'pop'

score = 45
score = '55'

type Users = {
  name: string;
  id: number
}

type Admin = {
  userName: string;
  id: number
}

let ezechiel: Users | Admin = {name: "Ezechiel", id: 243}

ezechiel = {userName: "eze", id: 243}

// function getDbId(id: number | string) {
//   // making some API calls
//   console.log(`DB id is: ${id}`)
// }

getDbId(33)
getDbId("45")

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase()
  }
}

// Array

const data: number[] = [1, 2, 3]
const data1: string[] = ['1', '2', '3']
const data3: (string | number | boolean)[] = ['1', '4', 6, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = 'aisle'
// seatAllotment = "crew"

