const navList = document.querySelector('.navList');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', () => {
  navList.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  navList.classList.remove('active');
});
