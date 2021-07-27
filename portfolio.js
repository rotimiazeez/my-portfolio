const navList = document.querySelector('.navList');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenuLiItems = document.getElementsByClassName('links');

openMenu.addEventListener('click', () => {
  navList.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navList.classList.remove('active');
})

for (let i = 0; i < closeMenuLiItems.length; i++) {
  closeMenuLiItems[i].addEventListener('click', () => {
    navList.classList.remove('active');
  });
}
