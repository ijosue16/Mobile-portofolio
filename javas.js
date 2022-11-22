const hamburgerIcon = document.querySelector('.nav-icon');
const hamburgerIconCross = document.querySelectorAll('.bar2');
const navMenuMobile = document.querySelector('.desktop-nav-container');
const pageName = document.querySelector('.pagename');
const navHeader = document.querySelector('.mobile-navhead');
const mobileNav = document.querySelector('.nav-bar');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
  navMenuMobile.classList.toggle('active');
  pageName.classList.toggle('active');
  navHeader.classList.toggle('active');
  mobileNav.classList.toggle('active');
  hamburgerIconCross.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburgerIcon.classList.remove('active');
  navMenuMobile.classList.remove('active');
  pageName.classList.remove('active');
  mobileNav.classList.remove('active');
  hamburgerIconCross.classList.remove('active');
}));