// Example JavaScript for form validation
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    let formValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        formValid = false;
    }

    if (formValid) {
        alert('Thank you for your message! We will get back to you soon.');
    } else {
        event.preventDefault();
    }
});
