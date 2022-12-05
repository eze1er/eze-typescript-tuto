interface User {
  readonly dbId: number,
  email: string,
  userId: number
  googleId?: string
  // startTrial: () => string
  startTrial(): string
  getCoupon(couponName: string, value: number): number

}

const ezechiel: User = { dbId: 22, email: "eze@h.com", userId: 2445, startTrial: () => {
  return "Trial starting"
},
getCoupon: (name: "ezechiel40", off: 10) => {
  return 40
}}
ezechiel.email = "eze@h.com"
// ezechiel.dbId = 55