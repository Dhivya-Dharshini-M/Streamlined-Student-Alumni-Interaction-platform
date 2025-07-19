// JavaScript for handling the login form submission
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form submission
            // Redirect to the home page
            window.location.href = 'home.html';
        });
    }
});
