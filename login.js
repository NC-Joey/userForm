const logIn = document.getElementById("login")
const container = document.querySelector(".form-container")
const loginError = document.querySelector(".login-error")
const errorMsg = document.querySelector(".login-error-msg")
const closeBtn = document.querySelector(".close-btn")
let loggedUser

closeBtn.addEventListener("click", function () {
    loginError.classList.add("hidden")
})

const confirmLogin = (event) => {
    event.preventDefault()
    const emailAddress = document.getElementById("email").value
    const pass = document.getElementById("password").value
    let users = JSON.parse(localStorage.getItem("users"))

    if (users.some(u => u.email === emailAddress)) {
        const matchUser = users.filter(data => data.email === emailAddress && data.password === pass)
        
        if (matchUser.length == 1) {
            console.log(matchUser)

            localStorage.setItem("loggedUser", matchUser[0].fullname);

            container.innerHTML = `<div class="justify-center items-center text-center">
                        <div>
                            <img src="./assets/images/green-check.png" alt="success" class="w-1/6 mx-auto">
                        </div>
                        <p>You've been successfully logged in. Please hold on.</p>
                    </div>`

            setTimeout(function () {
                window.location.href = "./dashboard.html"
            }, 2000)
            
        } else {
            errorMsg.textContent = "Email and password don't match, please try again"
            loginError.classList.remove("hidden")
        }
    } else {
        errorMsg.textContent = "Account not found, please check email and try again or sign up to use our platform"
        loginError.classList.remove("hidden")
    }

    

}

logIn.addEventListener("click", confirmLogin)