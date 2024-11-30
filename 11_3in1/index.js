// Validate the signup form
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert('Form submitted successfully!');
    this.reset();
});

// Add a hover effect using JavaScript
document.querySelector('button').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#feb47b';
});

document.querySelector('button').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#ff7e5f';
});
