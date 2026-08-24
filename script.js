document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    // Simple Form Validation & Submission Handler
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            // Display success feedback
            formStatus.style.color = 'green';
            formStatus.textContent = 'Thank you! Your message has been sent successfully.';

            // Reset form fields
            contactForm.reset();
        } else {
            // Display error feedback
            formStatus.style.color = 'red';
            formStatus.textContent = 'Please fill out all fields before submitting.';
        }
    });
});
