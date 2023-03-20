bar = document.querySelector(".hamburger");
bar.onclick = function(){
    navbar = document.querySelector(".nav-links");
    navbar.classList.toggle("active");
}