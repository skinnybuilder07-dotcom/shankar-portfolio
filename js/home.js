/* =========================================
   HERO TYPING EFFECT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.getElementById("typing-text");

    if (!typingText) {
        return;
    }

    const roles = [
        "Full Stack Developer",
        "Web Developer",
        "Python Developer",
        "Tech Enthusiast"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (!deleting) {
            typingText.textContent = currentRole.substring(0, characterIndex + 1);
            characterIndex++;

            if (characterIndex === currentRole.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            typingText.textContent = currentRole.substring(0, characterIndex - 1);
            characterIndex--;

            if (characterIndex === 0) {
                deleting = false;
                roleIndex++;

                if (roleIndex >= roles.length) {
                    roleIndex = 0;
                }
            }
        }

        const speed = deleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }

    typeEffect();
});