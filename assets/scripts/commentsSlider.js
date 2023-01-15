let btn = document.getElementById("btnEnd");
let btnStart = document.getElementById("btnStart");
let block = document.getElementById("block");

btnEnd.onclick = () => {
    block.scrollBy(0, 120); // на 120 px вниз
};
btnStart.onclick = () => {
    block.scrollBy(0, -120); // на 120 px вверх
};