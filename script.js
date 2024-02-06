

document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(registerForm);

        // Show loading animation or message here if desired
        showLoading();

        // Initiate the form submission after a 1-second delay
        setTimeout(() => {
            fetch('https://script.google.com/macros/s/AKfycby1eUkDPJs3NyhnDZMhr69CQU3_U6iAnUqWHe8zCxzQnbOP6woEXF1ctbSiijtqMIDF0w/exec',{
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    // Redirect to success page
                    window.location.href = 'success.html';
                } else {
                    // Handle registration failure
                    console.log('Registration failed. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        }, 10); // 1-second delay
    });
});

function showLoading() {
    // Implement your loading animation or message here
}
