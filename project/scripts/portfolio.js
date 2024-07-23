document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("menu");
    const navUL = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navUL.classList.toggle("active");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();

    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = currentYear;

    document.getElementById('lastModified').textContent = lastModified;
});
