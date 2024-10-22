document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form from submitting the traditional way

        // Collect form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };

        // Send data to Google Apps Script
        fetch('https://script.google.com/macros/s/AKfycbyW90G9ZVbNoC-1NBhx0ecNR3P-nz7a2zPs1OyX-6uOInu4pGNwFDMF70kBHhu7XtH52w/exec', {  // Replace with the deployed Apps Script URL
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        })
            .then(response => {
                alert('Form submitted successfully!');
                form.reset();  // Optionally reset the form
            })
            .catch(error => {
                alert('Form submission failed. Please try again.');
            });
});
});
