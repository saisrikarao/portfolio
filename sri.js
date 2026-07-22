// ===== Smooth Scrolling =====
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===== Active Navigation =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===== Fade Animation =====
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".project-card,.skill,.card,.about").forEach((el) => {
    observer.observe(el);
});

// ===== Welcome Message =====
window.onload = function () {

    console.log("Portfolio Loaded Successfully!");

};

// ===== Contact Button =====
const contactBtn = document.querySelector(".btn2");

if(contactBtn){

contactBtn.addEventListener("click",function(){

alert("Thank you for visiting my portfolio!");

});

}