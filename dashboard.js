const container = document.querySelector(".form-container")
let loggedUser = localStorage.getItem("loggedUser")

container.innerHTML = `
            <h1 class="font-bold text-xl mb-4 sm:text-center">Welcome, ${loggedUser}</h1>

            <div>
                <h4 class="text-md font-medium mb-1">Here are facts that you already know</h4>
                <ol class="text-xs lg:text-sm">
                    <li>Your fullname has ${loggedUser.length - 1} letters.</li>
                    <li>${loggedUser.length - 1} + ${loggedUser.length - 1} = ${(loggedUser.length - 1) + (loggedUser.length - 1)}.</li>
                    <li>${loggedUser.length - 1} * ${loggedUser.length - 1} = ${(loggedUser.length - 1) * (loggedUser.length - 1)}.</li>
                    <li>${loggedUser.length - 1}<sup>2</sup> = ${(loggedUser.length - 1) ** 2}.</li>
                </ol>
            </div>`
console.log(loggedUser)
