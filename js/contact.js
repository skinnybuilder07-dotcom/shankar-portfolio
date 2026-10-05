/* =========================================
   CONTACT FORM
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const form =
        document.getElementById("contactForm");

    const status =
        document.getElementById("formStatus");


    if (!form) {
        return;
    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        status.style.display = "block";

        status.innerHTML =
            '<i class="bi bi-info-circle"></i> ' +
            'Your message form is ready. Connect an email service or backend to receive messages.';


        form.reset();

    });


    /* =====================================
       CARD ANIMATION
    ===================================== */

    const cards =
        document.querySelectorAll(
            ".contact-info-card, .contact-form-card, .availability-box"
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