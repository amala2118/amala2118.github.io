// Update the footer year automatically

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Mobile navigation

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("active");

        const isOpen = navigation.classList.contains("active");
        menuButton.setAttribute("aria-expanded", isOpen);
    });
}


// Close mobile menu after clicking a link

if (navigation) {
    const navLinks = navigation.querySelectorAll("a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");

            if (menuButton) {
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
    });
}


// Highlight the current navigation page

const currentPage = window.location.pathname;

const allNavLinks = document.querySelectorAll(".nav-links a");

allNavLinks.forEach((link) => {
    const linkPage = new URL(link.href).pathname;

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});
