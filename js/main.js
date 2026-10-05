/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   CURRENT YEAR
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const yearElement =
        document.getElementById("current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});