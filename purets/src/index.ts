class User {
  email: string
  name: string
  readonly city: string
  constructor(email: string, name: string){
    this.email = email;
    this.name = name;
    this.city = "";
  }
}

const ezechiel = new User( "eze@gmail.com", "Ezechiel")
// ezechiel.city ="Toronto";