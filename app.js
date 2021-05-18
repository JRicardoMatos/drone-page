const hamburger = document.querySelector(".hamburger")
const navBar = document.querySelector(".nav-links")
const closeNav = document.querySelector(".close-nav")

hamburger.addEventListener('click', ()=>{
    navBar.classList.add("open");
})

closeNav.addEventListener('click', ()=>{
    navBar.classList.remove("open");
})