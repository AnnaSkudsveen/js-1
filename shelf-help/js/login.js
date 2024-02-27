const registerBtn = document.getElementById("registerBtn")
const registerUsername= document.getElementById("register")
const loginUsername = document.getElementById("login")
const loginBtn = document.getElementById("loginBtn")
registerBtn.addEventListener("", ()=>{
    let newUser = {
        username:registerUsername.value,
        collection: []
    }
    //register the user
    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers:
    })
})