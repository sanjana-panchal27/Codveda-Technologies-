const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('navmenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
