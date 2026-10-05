/* =========================================
   EXPERIENCE PAGE ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const items =
        document.querySelectorAll(
            ".timeline-item, .experience-summary"
        );


    items.forEach(function (item, index) {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(30px)";

        item.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";


        setTimeout(function () {

            item.style.opacity = "1";

            item.style.transform =
                "translateY(0)";

        }, 200 + (index * 250));

    });

});