// Select Submit input button
const submitButton = document.querySelector('#submit');
// console.log(submitButton);
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    // get user email
    const emailValue = emailInput.value;
    // get password value
    const passwordValue = passwordInput.value;

    // Matched condition
    if (emailValue == 'safikurrahman7514@gmail.com' && passwordValue == 'safik1475') {
        window.location.href = 'originBank.html'
    } else {
        alert('Please check your email or password!');
    };
    // empty email and password value
    emailValue.value = '';
    passwordValue.value = '';
});
