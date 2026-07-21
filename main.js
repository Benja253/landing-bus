const menuHamburguesa = document.getElementById('menuHamburguesa')
const menu = document.getElementById('menu')

menuHamburguesa.addEventListener('click', e => {
  menuHamburguesa.classList.toggle('equis')
  menu.classList.toggle('close_header_menu')
})