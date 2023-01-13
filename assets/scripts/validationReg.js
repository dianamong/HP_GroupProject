document.getElementById('registration').addEventListener("click", function(evt){
    let pas1=document.getElementById('userPassword1').value;
    let pas2=document.getElementById('userPassword2').value;
    console.log(pas1);
    console.log(pas2);
    if (pas1 != pas2){
        evt.preventDefault();
        document.getElementById('pasInfo').innerHTML="Passwords don't match!";
    }
    else{
        document.getElementById('pasInfo').innerHTML=" ";
    }
    })
    
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