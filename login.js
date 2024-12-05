function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Clear previous error messages
    errorMessage.textContent = "";

    // Validation checks
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long!";
        return false;
    }

    // Simulating a successful login check (use actual API in real scenarios)
    if (username !== "Sahal" || password !== "Sahal1234") {
        errorMessage.textContent = "Invalid username or password!";
        return false;
    }

    // Show success alert
    alert("Login successful!");

    // After the alert, redirect the user to the next page
    window.location.href = "home1.html";  // Change the page name as needed
    return false;  // Prevent form submission (page reload)
}
