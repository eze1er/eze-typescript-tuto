interface User {
  readonly dbId: number,
  email: string,
  userId: number
  googleId?: string
  // startTrial: () => string
  startTrial(): string
  getCoupon(couponName: string, value: number): number

}

interface User {
  gitHubToken: string
}

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const ezechiel: User = { dbId: 22, email: "eze@h.com", userId: 2445, gitHubToken: "github", startTrial: () => {
  return "Trial starting"
},
getCoupon: (name: "ezechiel40", off: 10) => {
  return 40
}}
ezechiel.email = "eze@h.com"
// ezechiel.dbId = 55