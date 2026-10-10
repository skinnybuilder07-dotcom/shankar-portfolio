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


/* =========================================
   CERTIFICATE MODAL HANDLER
========================================= */

function openCertModal(imageSrc, title, issuer, certRef) {

    const modalImage = document.getElementById("modalCertImage");

    const modalTitle = document.getElementById("modalCertTitle");

    const modalIssuer = document.getElementById("modalCertIssuer");

    const modalBadge = document.getElementById("modalCertBadge");

    const downloadBtn = document.getElementById("modalDownloadBtn");


    if (modalImage) modalImage.src = imageSrc;

    if (modalTitle) modalTitle.textContent = title;

    if (modalIssuer) modalIssuer.textContent = issuer;

    if (modalBadge) modalBadge.textContent = certRef ? `Ref: ${certRef}` : "Verified Credential";

    if (downloadBtn) downloadBtn.href = imageSrc;

}