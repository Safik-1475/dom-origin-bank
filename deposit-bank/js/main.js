const submit = document.getElementById('submit');
// console.log(submit);

submit.addEventListener('click', function () {
    const email = document.getElementById('email').value;
    // console.log(email);
    const password = document.getElementById('password').value;
    // console.log(password);
    if (email == 'safikurrahman7514@gmail.com' && password == 'safik') {
        window.location.href = 'bank.html'
    } else {
        console.log('User not valid');
    }
})