/* =========================================
   PROJECT FILTER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectItems =
        document.querySelectorAll(".project-item");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            /* Remove active class */

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            /* Add active class */

            this.classList.add("active");


            const selectedFilter =
                this.getAttribute("data-filter");


            /* Filter projects */

            projectItems.forEach(function (project) {

                const category =
                    project.getAttribute("data-category");


                if (
                    selectedFilter === "all" ||
                    selectedFilter === category
                ) {

                    project.classList.remove("hidden");

                } else {

                    project.classList.add("hidden");

                }

            });

        });

    });


    /* =====================================
       PROJECT CARD ANIMATION
    ===================================== */

    projectItems.forEach(function (project, index) {

        project.style.opacity = "0";

        project.style.transform =
            "translateY(25px)";

        project.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";


        setTimeout(function () {

            project.style.opacity = "1";

            project.style.transform =
                "translateY(0)";

        }, 150 + (index * 100));

    });

});