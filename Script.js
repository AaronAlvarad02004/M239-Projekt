const mobile_menue = document.querySelector(".mobile-nav");
const menu_btn = document.querySelector('.hamburger');

menu_btn.addEventListener('click', function() {
menu_btn.classList.toggle('is-active');
mobile_menue.classList.toggle("is-active")
});