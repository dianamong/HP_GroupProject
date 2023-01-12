document.getElementById('signIn').addEventListener("click", () => {
    let modalvhod = $modal1({
        content: `<div class="loginForm_template_pic"> <img class="loginForm_template_pic_Harry" src="./assets/images/login/authorisation.png"> </div> <div class="loginForm_welcome"> <p class="loginForm_welcome_text">Hi, <span class="nameColor">Stranger</span>!</p> </div> <div class="loginForm_template_fieldset"> <div class="emailBlock"> <label for="userEmail" class="emailLabel">Email</label> <input type="email" id="userEmail" class="email" /> </div> <div class="passwordBlock"> <label for="userPassword" class="passwordLabel">Password</label> <input type="text" id="userPassword" class="password" /> </div> <div class="checkboxBlock"> <label class="rememberText"><input type="checkbox" name="remember" value="1"> Remember me</label> <div class="restorePass"> <a href="#" class="restorePass_Link">Forgot password?</a> </div> </div>`,
        footerButtons: [
            { class: 'btn button__shine loginButton', text: 'LOGIN' },
            { class: 'btn  button__shine signUpButton', text: 'SIGN UP', id: 'reg'}
        ]
    })
    
    modalvhod.show();
    $('.signUpButton').on("click", function() {
        modalvhod.hide();
        let modalreg = $modal4({
            content: `<div class="registration_template_pic"> <img class="registration_template_pic_Harry" src="./assets/images/login/authorisation.png"> </div> <div class="registration_welcome"> <p class="registration_welcome_text">Hi, <span class="nameColor">Stranger</span>!</p> </div> <form class="registration_template_fieldset form"> <div class="loginBlock"> <label for="userLogin" class="loginLabel">Login</label> <input type="text" id="userLogin" class="login form__item" required pattern="[a-zA-Z0-9]+$" minlength="5" /> </div> <div class="emailBlock"> <label for="userEmail" class="emailLabel" pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$">Email</label> <input type="email" id="userEmail" class="email form__item" required /> </div> <div class="passwordBlock"> <label for="userPassword" class="passwordLabel" pattern="^\d{1,}$">Password</label> <input type="text" id="userPassword1" class="password form__item" maxlength="7" required /> </div> <div class="passwordBlock"> <label for="userPassword" class="passwordLabel">Repeat password</label> <input type="text" id="userPassword2" class="password form__item" required /> </div> <div class="heroBlock"> <label for="selectHero" class="heroLabel">Your Hero</label> <input type="text" id="selectHero" class="selectHero form__item" placeholder="Sirius Black" required /> </div> <div class="checkboxBlock checkLogin"> <label class="rememberText"><input type="checkbox" name="remember" value="1">Remember me</label> </div> <div class="pasInfo" id="pasInfo"></div></form>`,
            footerButtons: [
                { class: 'btn  button__shine signUpButton_registration', text: 'SIGN UP' }
            ]
        })
        modalreg.show();
    })
})