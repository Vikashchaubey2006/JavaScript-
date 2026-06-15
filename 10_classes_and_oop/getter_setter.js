class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
    this._email = value
  }

  get password(){
    // return this._password.toUpperCase()
    return `${this._password}vikash` // in this line vikash will come with the inbuild password
  }

  set password(value){
      this._password = value.toUpperCase()
  }
}

const vikash = new User("vikash@ai", "abc")
console.log(vikash.password)
console.log(vikash.email)