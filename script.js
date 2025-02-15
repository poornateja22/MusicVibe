const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Toggle menu on button click
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

// Close menu when clicking outside or on a link
document.addEventListener("click", (e) => {
    if (
        (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) ||
        e.target.matches(".nav-links a")
    ) {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
        navLinks.classList.remove("active");
    });
});
