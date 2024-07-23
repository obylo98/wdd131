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

function handleFormSubmission(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    window.location.href = `message.html?name=${encodeURIComponent(name)}&message=${encodeURIComponent(message)}`;
}

function displayConfirmationMessage() {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.slice(1);
        const queries = queryString.split('&');
        queries.forEach(query => {
            const [key, value] = query.split('=');
            params[decodeURIComponent(key)] = decodeURIComponent(value);
        });
        return params;
    }

    const params = getQueryParams();
    const confirmationMessage = document.getElementById('confirmationMessage');
    if (confirmationMessage) {
        confirmationMessage.textContent = `Thank you, ${params.name}. Your message has been sent: "${params.message}"`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

   
    if (document.getElementById('confirmationMessage')) {
        displayConfirmationMessage();
    }
});