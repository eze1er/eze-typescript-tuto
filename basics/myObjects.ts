const User = {
  name: "Ezechiel",
  email: "eze@gmail.com",
  isActive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "Thomas", isPaid: false, email: "thomas@h.com"}

createUser(newUser)

function createCourse():{name: string, price: number}{
  return {name: "ReactJS", price: 99.9}
}

export {}