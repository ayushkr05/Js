const accountId = 1234
let accountName ="Ayush"   
var accountPassword = "usuus"
accountState = "Bangalore"
comments = "Hi this is my information"

// accountId = 2 cannot be used as it is constant and cannot be changed.

accountName = "Kumar"
accountPassword = "jhjghjkg"
accountState = "Bihar"

console.table([accountId, accountName, accountPassword, accountState, comments]);
/*
Prefer not to use var because of scope as all the var will be changed if we try to change one var in code` 
*/