'use strict';

const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 5.5,
            spaceBetween: 10,
        }
    },
});

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 5.5,
});

sliderMain.controller.control = sliderBg;

// I'm a fuckn genious lol xd lmao
function clearClasses(arr) {
    arr.forEach(item => {
        item.classList.remove('opened');
    });
}

const sliderElements = document.querySelectorAll('.slider__item');

sliderElements.forEach(item => {
    
    item.addEventListener('click', (event) => {
        console.log(event);
        clearClasses(sliderElements);
        item.classList.toggle('opened');
        item.addEventListener('click', () => {
            clearClasses(item);
        });
    });
});
