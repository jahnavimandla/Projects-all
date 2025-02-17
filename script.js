// script.js
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                // Smooth scroll to section
                const section = document.querySelector(targetId);
                section.scrollIntoView({ behavior: "smooth" });
            } else {
                // Redirect to external link
                window.location.href = targetId;
            }
        });
    });
});
