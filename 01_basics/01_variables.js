const accountId = 12345;
let accountEmail = "vikash@gmail.com"
var accountPassword = "12345"
accountCity = "Bhabua"
let accountState; 

accountEmail = "vc@c.com"
accountPassword = "54321"
accountCity = "Mohania"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);