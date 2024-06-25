document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    clearErrors();

    // Validate inputs
    let valid = true;
    if (!validateUsername()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validatePassword()) valid = false;
    if (!validateConfirmPassword()) valid = false;

    // If all validations pass, submit the form (or handle form submission)
    if (valid) {
        alert('Registration successful!');
        // Here you can handle form submission, e.g., sending data to the server
    }
});

function clearErrors() {
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('confirmPasswordError').style.display = 'none';
}

function validateUsername() {
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        document.getElementById('usernameError').innerText = 'Username must be at least 3 characters long';
        document.getElementById('usernameError').style.display = 'block';
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        document.getElementById('emailError').style.display = 'block';
        return false;
    }
    return true;
}

function validatePassword() {
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long';
        document.getElementById('passwordError').style.display = 'block';
        return false;
    }
    return true;
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
        return false;
    }
    return true;
}
