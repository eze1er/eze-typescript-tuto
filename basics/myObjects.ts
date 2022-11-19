const User = {
  name: "Ezechiel",
  email: "eze@gmail.com",
  isActive: true
}

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "Thomas", isPaid: false, email: "thomas@h.com"}

// createUser(newUser)

function createCourse():{name: string, price: number}{
  return {name: "ReactJS", price: 99.9}
}

// type alias

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean,
  credCardDetails?: number

}

let myUser: User = {
  _id: "1234",
  name: "Eze",
  email: "ez@h.com",
  isActive: false,
}

type cardNumber = {
  cardNumber: string
}

type cardDate = {
  cardDate: number
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}


export {}