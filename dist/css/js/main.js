const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

const menuItems = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menu-item');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        console.log('moi')
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuItems.classList.add('show');
        menuItem.forEach(element => element.classList.add('show'));
   
        showMenu = true
    }
    else {
        console.log('kukkuluuru')
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuItems.classList.remove('show');
        menuItem.forEach(element => element.classList.remove('show'));
   
        showMenu = false
    }
}

console.log(showMenu);