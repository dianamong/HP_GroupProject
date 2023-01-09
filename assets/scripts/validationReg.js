document.getElementById('registration').addEventListener("click", function(){
let pas1=document.getElementById('userPassword1').value;
let pas2=document.getElementById('userPassword2').value;
console.log(pas1);
console.log(pas2);
if (pas1 != pas2){
    document.getElementById('pasInfo').innerHTML="Passwords don't match!";
}
else{
    document.getElementById('pasInfo').innerHTML=" ";
}
})
