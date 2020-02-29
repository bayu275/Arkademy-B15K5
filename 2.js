function is_username_valid(username){
    let result = null
    let polaUsername = /^\d\w+\d$/
    username.length >= 5 && username.length <= 8 ? result = username.match(polaUsername) !== null ? true : false : result = false
    return console.log(result)
}

// is_username_valid(`3brah2`)

function is_password_valid(password){
    let result = null
    let polaPassword = /^\d.\d\w+\d+$/
    password.length >= 7 && password.length <= 11 ? result = password.match(polaPassword) !== null ? true : false : result = false
    return console.log(result)
}

is_password_valid('1#2andis12')