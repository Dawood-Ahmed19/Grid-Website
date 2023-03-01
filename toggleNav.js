const iconChange = document.getElementById("nav--icon");
const navMenu = document.getElementById("nav");

iconChange.addEventListener('click', function () {
    this.querySelector('.fa-bars-staggered').classList.toggle('fa-xmark');
    navMenu.classList.toggle('nav--active');
});