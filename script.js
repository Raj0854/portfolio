/* ==========================
   Typing Animation
========================== */

const words = [
    "Frontend Developer",
    "JavaScript Developer",
    "Python Developer",
    "Full Stack Learner",
    "Open To Internship"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


/* ==========================
   Back To Top Button
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================
   Scroll Reveal
========================== */

ScrollReveal().reveal('.hero-left', {
    origin: 'left',
    distance: '80px',
    duration: 1200
});

ScrollReveal().reveal('.hero-right', {
    origin: 'right',
    distance: '80px',
    duration: 1200
});

ScrollReveal().reveal('.skill-card', {
    interval: 100,
    distance: '40px'
});

ScrollReveal().reveal('.project-card', {
    interval: 150,
    distance: '40px'
});

ScrollReveal().reveal('.contact-card', {
    delay: 300
});


/* ==========================
   Active Navbar
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }
    });
});


/* ==========================
   Smooth Hover Glow
========================== */

document.querySelectorAll(
    ".skill-card, .project-card"
).forEach(card => {

    card.addEventListener("mousemove", () => {
        card.style.boxShadow =
            "0 10px 25px rgba(56,189,248,.4)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });

});