'use: strict'

const menu = document.querySelector('#menu');
const navList = document.querySelector('.list');

menu.addEventListener('click', function () {
    if (navList.style.right === '-350px') navList.style.right = '0';
    else navList.style.right = '-350px';
});

//Reveal on scroll
AOS.init({
    offset: 200,
    duration: 1200,
    once: true,
    mirror: true
});