/* =========================================
   SKILL PROGRESS ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const progressBars =
        document.querySelectorAll(".progress-bar");


    progressBars.forEach(function (bar, index) {

        const progress =
            bar.getAttribute("data-progress");


        setTimeout(function () {

            bar.style.width =
                progress + "%";

        }, 300 + (index * 150));

    });


    /* =====================================
       CARD ANIMATION
    ===================================== */

    const cards =
        document.querySelectorAll(
            ".skill-card, .knowledge-card, .exploring-item"
        );


    cards.forEach(function (card, index) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(20px)";


        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";


        setTimeout(function () {

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, 200 + (index * 80));

    });

});