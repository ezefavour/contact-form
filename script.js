document.addEventListener('DOMContentLoaded', function() {
    // Load saved form data from Local Storage if available
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('password').value = localStorage.getItem('password') || '';
    document.getElementById('message').value = localStorage.getItem('message') || '';
});

document.getElementById('contactForm').addEventListener('input', function() {
    // Save form data to Local Storage on input
    localStorage.setItem('name', document.getElementById('name').value.trim());
    localStorage.setItem('email', document.getElementById('email').value.trim());
    localStorage.setItem('password', document.getElementById('password').value.trim());
    localStorage.setItem('message', document.getElementById('message').value.trim());
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message').value.trim();
    const successMessage = document.getElementById('success-message');
    const passwordError = document.getElementById('password-error');

    // Clear previous error
    passwordError.classList.add('hidden');
    document.getElementById('password').classList.remove('border-red-500');

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password validation
    if (password === '') {
        document.getElementById('password').classList.add('border-red-500');
        passwordError.textContent = 'Password is required';
        passwordError.classList.remove('hidden');
        return;
    }

    // Simulating email sending (replace this with real email sending logic)
    setTimeout(() => {
        successMessage.textContent = 'Your message has been sent successfully!';
        successMessage.classList.remove('hidden');
        
        // Clear form and Local Storage
        document.getElementById('contactForm').reset();
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('message');
    }, 1000);
});
