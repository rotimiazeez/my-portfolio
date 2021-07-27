const navList = document.querySelector('.navList');
const closeMenu = document.querySelector('.navList').childNodes;
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', () => {
  navList.classList.add('active');
});

for (let i = 0; i < closeMenu.length; i++) {
  closeMenu[i].addEventListener('click', () => {
    navList.classList.remove('active');
  });
}
