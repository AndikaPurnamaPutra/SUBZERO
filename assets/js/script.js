const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.toggle("active");
});
