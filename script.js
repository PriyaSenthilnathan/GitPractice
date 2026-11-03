// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// Close Mobile Menu After Clicking a Link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// Newsletter Form

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
        formMessage.textContent = "Please enter your email address.";
        return;
    }

    formMessage.textContent = "Thank you for subscribing! Happy travels.";

    newsletterForm.reset();

});