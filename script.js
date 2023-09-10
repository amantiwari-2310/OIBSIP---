document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Add your authentication logic here (e.g., check against a database)
        // For a basic example, we'll check if the email and password are non-empty.

        if (email.trim() === "" || password.trim() === "") {
            loginMessage.textContent = "Please fill in both email and password fields.";
        } else {
            // Successful login logic goes here
            loginMessage.textContent = "Login successful!";
            // You can redirect the user or perform other actions here.
        }
    });
});
