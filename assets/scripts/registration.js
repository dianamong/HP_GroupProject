let loginSt = localStorage.getItem('login');
let link = "./assets/images/header/avatar.svg"
document.addEventListener("DOMContentLoaded", function () {
    if (loginSt !== null) {

        document.getElementById('signUp').style.display = "none";
        document.getElementById('img_avatar').style.width = '3em';
        document.getElementById('avatar').style.display = "block";
        if(  localStorage.getItem('avatar') == ""){
            document.getElementById('img_avatar').src = link;
        }
         else{
            document.getElementById('img_avatar').src =  localStorage.getItem('avatar');
         }
    }
})



document.getElementById('signUp').addEventListener("click", () => {
    document.getElementById('registrationForm').style.display = "flex";
    document.querySelector('.mainpage').classList.add("mainpage_click");
    let elements = [...document.getElementsByClassName("text")].forEach(item => {
        item.classList.add("text_click");
    })


})
document.getElementById('close').addEventListener("click", () => {
    document.getElementById('registrationForm').style.display = "none";
    document.querySelector('.mainpage').classList.remove("mainpage_click");
    let elements = [...document.getElementsByClassName("text")].forEach(item => {
        item.classList.remove("text_click");
    })

})
document.querySelector('.signUpButton_registration').addEventListener('click', () => {
    document.getElementById('img_avatar').style.width = '4em';
    document.querySelector('.mainpage').classList.remove("mainpage_click");
    let elements = [...document.getElementsByClassName("text")].forEach(item => {
        item.classList.remove("text_click");
    })

})

let mainpage = document.querySelector('.text');
let pas1 = document.getElementById('userPassword1');
let pas2 = document.getElementById('userPassword2');
document.getElementById('registration').addEventListener("click", (evt) => {
    if (pas1.value !== pas2.value) {
        evt.preventDefault();
        document.getElementById('pasInfo').innerHTML = "Passwords don't match!";
    }

    else {
        document.getElementById('pasInfo').innerHTML = " ";
    }

});
let Inputs = [...document.querySelectorAll('.form__item')].forEach(item => {
    item.addEventListener('input', () => {

        if (!item.validity.valid) {
            item.classList.add("error");
        } else {
            item.classList.remove("error");
            item.classList.add("valid");
        }
        if (pas2.value !== "" && pas2.value != pas1.value) {
            pas2.classList.add("error");
        }

    })
});

document.getElementById('regForm').addEventListener("submit", () => {
    
    document.getElementById('avatar').style.display = "block";
    document.getElementById('signUp').style.display = "none";
    let login = document.getElementById('userLogin').value;
    let mail = document.getElementById('userEmail').value;
    let pas = document.getElementById('userPassword1').value;
    let avatar = document.getElementById('selectHero').value;
   
    let mailSt = localStorage.getItem('mail');
    let pasSt = localStorage.getItem('pas');
    let avatarSt = localStorage.getItem('avatar');

    if (loginSt === null) {
        localStorage.setItem('login', login);
    }
    if (mailSt === null) {
        localStorage.setItem('mail', mail);
    }
    if (pasSt === null) {
        localStorage.setItem('pas', pas);
    }
    if (avatarSt === null) {
        localStorage.setItem('avatar', avatar);
    }
    if (avatar === '') {
        localStorage.setItem('avatar', link);
    }
 if( avatar == ""){
        document.getElementById('img_avatar').src = link;
    }
     else{
        document.getElementById('img_avatar').src =  localStorage.getItem('avatar');
     }
    let Inputs = [...document.querySelectorAll('.form__item')].forEach(item => {
        if (item.validity.valid) {
            document.getElementById('registrationForm').style.display = "none";
            mainpage.classList.remove("mainpage_click");
        }
    });
});


/*let modalreg = $modal4({
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

})*/

/*if (document.getElementById('registrationForm').style.display=="flex"){
document.getElementById('signUp').addEventListener("click", () => {
document.getElementById('registrationForm').style.display="none";})}
function pushLocalSt() {
console.log('hi');
let login = localStorage.getItem("login");
let inputLogin = document.querySelector('.login');
if (login === null) {
localStorage.setItem('login', inputLogin.value);
}
}*/