document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("menu");
    const navUL = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navUL.classList.toggle("active");
    });
});
