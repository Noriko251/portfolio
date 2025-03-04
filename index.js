const headerHamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const hamMenuBtn = document.querySelector('.header__main-ham-menu')
const smallMenu = document.querySelector('.header__sm-menu')
const hamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
const smallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

headerHamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
        smallMenu.classList.remove('header__sm-menu--active')
    } else {
        smallMenu.classList.add('header__sm-menu--active')
    }
    if (hamMenuBtn.classList.contains('d-none')) {
        hamMenuBtn.classList.remove('d-none')
        hamMenuCloseBtn.classList.add('d-none')
    } else {
        hamMenuBtn.classList.add('d-none')
        hamMenuCloseBtn.classList.remove('d-none')
    }
})

for (let i = 0; i < smallMenuLinks.length; i++) {
    smallMenuLinks[i].addEventListener('click', () => {
        smallMenu.classList.remove('header__sm-menu--active')
        hamMenuBtn.classList.remove('d-none')
        hamMenuCloseBtn.classList.add('d-none')
    })
}


const selectBox = document.querySelector('.header__select-box');
const options = document.querySelector('.header__options');

selectBox.addEventListener('mouseenter', ()=> {
    options.parentElement.classList.add('active');
});

options.addEventListener('mouseleave', ()=> {
    options.parentElement.classList.remove('active');
});

const smSelectBox = document.querySelector('.header__sm-select-box');
const smOptions = document.querySelector('.header__sm-options');

smSelectBox.addEventListener('mouseenter', ()=> {
    smOptions.parentElement.classList.add('active');
});

smOptions.addEventListener('mouseleave', ()=> {
    smOptions.parentElement.classList.remove('active');
});