
const signUp = document.getElementById("signup")
const passError = document.querySelector(".pass-error")
const cpassError = document.querySelector(".cpass-error")
const main = document.querySelector(".main-body")
const container = document.querySelector(".form-container")

let users = JSON.parse(localStorage.getItem("users")) || []

const checkData = (event) => {
    event.preventDefault()
    const firstName = document.getElementById("firstname").value
    const lastName = document.getElementById("lastname").value
    const emailAddress = document.getElementById("email").value
    const pass = document.getElementById("password").value
    const confirmPass = document.getElementById("cpassword").value

    passError.textContent = ""
    cpassError.textContent = ""

    

    if (pass.length < 8) {
        console.log(pass.length)
        return passError.textContent = "too short"
        
    } else if (pass.length > 20) {
        return passError.textContent = "too long"
    }

    if (confirmPass != pass) {
        return cpassError.textContent = "passwords don't match"
    }

    const user = {
        firstname : firstName,
        lastname : lastName,
        fullname : `${firstName} ${lastName}`,
        email: emailAddress,
        password : pass
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    console.log(users)

    main.classList.add("mid-screen")

    setTimeout(function () {
        container.innerHTML = `<div class="justify-center items-center text-center">
                <div>
                    <img src="./assets/images/green-check.png" alt="success" class="w-1/6 mx-auto">
                </div>
                <p>Your account has been created. Please proceed to login <a href="./login.html" class="font-medium text-sky-600">here.</a></p>
            </div>`
    }, 500)
    
    
}

signUp.addEventListener("click", checkData)