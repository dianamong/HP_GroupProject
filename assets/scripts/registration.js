document.getElementById('signUp').addEventListener("click", () => {
    let modalreg = $modal4({
        content: `<div class="registration_template_pic"> <img class="registration_template_pic_Harry" src="./assets/images/login/authorisation.png"> </div> <div class="registration_welcome"> <p class="registration_welcome_text">Hi, <span class="nameColor">Stranger</span>!</p> </div> <form class="registration_template_fieldset form"> <div class="loginBlock"> <label for="userLogin" class="loginLabel">Login</label> <input type="text" id="userLogin" class="login form__item" required pattern="[a-zA-Z0-9]+$" minlength="5" /> </div> <div class="emailBlock"> <label for="userEmail" class="emailLabel" pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$">Email</label> <input type="email" id="userEmail" class="email form__item userEmail" required /> </div> <div class="passwordBlock"> <label for="userPassword" class="passwordLabel" pattern="^\d{1,}$">Password</label> <input type="text" id="userPassword1" class="password userPassword1 form__item" maxlength="7" required /> </div> <div class="passwordBlock"> <label for="userPassword" class="passwordLabel">Repeat password</label> <input type="text" id="userPassword2" class="password userPassword2 form__item" required /> </div> <div class="heroBlock"> <label for="selectHero" class="heroLabel">Your Hero</label> <input type="text" id="selectHero" class="selectHero form__item" placeholder="Sirius Black" required /> </div> <div class="checkboxBlock checkLogin"> <label class="rememberText"><input type="checkbox" name="remember" value="1">Remember me</label> </div> <div class="pasInfo" id="pasInfo"></div> <button type="submit" class="button__shine signUpButton_registration" id="registration">SIGN UP</button></form>`,
    })

    modalreg.show();
    $('.signUpButton_registration').on("click", function (evt) {
        pushLocalSt()
        let pas1 = document.querySelector('.userPassword1').value;
        let pas2 = document.querySelector('.userPassword2').value;
        if (pas1 !== pas2) {
            evt.preventDefault();
            alert("Passwords don't match!");
        }

    })
})
function pushLocalSt() {
    console.log('hi');
    let login = localStorage.getItem("login");
    let inputLogin = document.querySelector('.login');
    if (login === null) {
        localStorage.setItem('login', inputLogin.value);
    }
}