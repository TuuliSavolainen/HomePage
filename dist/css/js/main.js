const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

const menuItems = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menu-item');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuItems.classList.add('show');
        menuItem.forEach(element => element.classList.add('show'));
   
        showMenu = true
    }
    else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuItems.classList.remove('show');
        menuItem.forEach(element => element.classList.remove('show'));
   
        showMenu = false
    }
}

const divElement = document.querySelector('.div-element')

divElement.addEventListener('click', closeMenu)

function closeMenu() {
    if (showMenu) {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuItems.classList.remove('show');
        menuItem.forEach(element => element.classList.remove('show'));
   
        showMenu = false
    }
}