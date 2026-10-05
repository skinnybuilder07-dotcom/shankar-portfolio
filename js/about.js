/* =========================================
   ABOUT PAGE ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const cards =
        document.querySelectorAll(
            ".about-card, .highlight-item, .fact-card"
        );


    cards.forEach(function (card, index) {

        card.style.opacity = "0";

        card.style.transform = "translateY(25px)";

        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        setTimeout(function () {

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, 150 + (index * 120));

    });

});