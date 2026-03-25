const accountId = 1005
let accountEmail = "endeavour@gmail.com"
var accountPassword = "23bcon1005" /* prefer not to use var because it can create issue in SCOPE */
accountCity = "Jaipur"
let accountState

console.log(accountId, accountEmail, accountPassword,);

// accountId = 2

// console.log(accountId); it is not allowed

// accountId = 1006 creating issues why
accountEmail = "vikalp@gmail.com"
accountPassword = "23bcon1006"
accountCity = "Sangod"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])