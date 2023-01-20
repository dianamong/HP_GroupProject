let kabinetAva = localStorage.getItem('avatar');
let mail = localStorage.getItem('mail');
let pas = localStorage.getItem('pas');
let login = localStorage.getItem('login');
const loginUpper = login;
/*const splitted = loginUpper.split("")
const first = splitted[0].toUpperCase()
splitted.splice(0, 1)
const resultLogin = [first, ...splitted].join("")*/

document.getElementById('img_avatar').addEventListener("click", () => {
    document.getElementById('userForm').style.display = "block";
})
document.getElementById('kabinet_close').addEventListener("click", () => {
    document.getElementById('userForm').style.display = "none";
})