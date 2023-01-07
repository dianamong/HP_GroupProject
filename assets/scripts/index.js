let rightArray = document.querySelector('arrayRight');
let leftArray = document.querySelector('arrayLeft');
let heroCards = document.querySelectorAll('.heroesBox__card');



class HeroCard {
    constructor(img, name) {
        this.img = img;
        this.name = name;
    }
}
let heroes = [
    new HeroCard("./assets/images/mainpage/harry.svg", 'Harry Potter'),
    new HeroCard("./assets/images/mainpage/lord.svg", 'Lord Voldemort'),
    new HeroCard("./assets/images/mainpage/hermione.svg", 'Hermione'),
    new HeroCard("./assets/images/mainpage/ron.svg", 'Ron Weasley'),

];


document.addEventListener('DOMContentLoaded', function (event) {
    let heroesContent = '';
    heroesContent += ` <button class="heroesBox__btn heroesBox__btn_right" id="arrayRight"></button>
        <div class="heroesBox__card"><img src="${heroes[0].img}" class="imgHover"alt="Harry">
            <p class="galleryText_size">${heroes[0].name}</p>
        </div>
        <div class="heroesBox__card"><img src="${heroes[1].img}"class="imgHover" alt="Lord">
            <p class="galleryText_size">${heroes[1].name}</p>
        </div>
        <div class="heroesBox__card"><img src="${heroes[2].img}" class="imgHover"alt="Hermione">
            <p class="galleryText_size">${heroes[2].name}</p>
        </div>
        <div class="heroesBox__card"><img src="${heroes[3].img}"class="imgHover" alt="Ron">
            <p class="galleryText_size">${heroes[3].name}</p>
        </div>
        <button class="heroesBox__btn heroesBox__btn_left" id="arrayLeft"></button>`
    document.querySelector('.heroesBox2').innerHTML = heroesContent;
});

//import Swiper, { Navigation, Pagination } from 'swiper';
//import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
//const swiper = require('swiper');

//const swiper = new Swiper('.heroesBox', {
//modules: [Navigation, Pagination],
//direction: 'horizontal',
//loop: true,
//navigation: {
// nextEl: '.heroesBox__btn_left',
// prevEl: '.heroesBox__btn_right',
//},
//});

let instaFooter = document.getElementById('insta');
let whatsFooter = document.getElementById('whats');
instaFooter.addEventListener('mouseover', e => instaFooter.src = "./assets/images/footer/insta.svg");
instaFooter.addEventListener('mouseout', e => instaFooter.src = "./assets/images/footer/image_41.png");
whatsFooter.addEventListener('mouseover', e => whatsFooter.src = "./assets/images/footer/whats.svg");
whatsFooter.addEventListener('mouseout', e => whatsFooter.src = "./assets/images/footer/image_40.png");




