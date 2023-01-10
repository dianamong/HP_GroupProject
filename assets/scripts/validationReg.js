
let pas1 = document.getElementById('userPassword1');
let pas2 = document.getElementById('userPassword2');
let form = document.querySelector('.form');
form.addEventListener("click", function (evt) {
    if (pas1.value !== pas2.value) {
        evt.preventDefault();
        document.getElementById('pasInfo').innerHTML = "Passwords don't match!";
    }
});



/*let Inputs = [...document.querySelectorAll('.form__item')].forEach(item => {
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

    });
});*/