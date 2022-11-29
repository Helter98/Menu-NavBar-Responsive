const hamburger = document.querySelector('.menu-responsive');
const navMenu = document.querySelector('.menu-navBar');

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
