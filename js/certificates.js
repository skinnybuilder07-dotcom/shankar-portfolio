/* =========================================
   CERTIFICATES PAGE ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const cards =
        document.querySelectorAll(
            ".certificate-item, .certificate-guide"
        );


    cards.forEach(function (card, index) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(25px)";

        card.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";


        setTimeout(function () {

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, 200 + (index * 150));

    });

});