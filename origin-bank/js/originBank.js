// select deposit button 
const depositButton = document.querySelector('#submitDepositBalance');
// console.log(depositButton);
depositButton.addEventListener('click', function (event) {
    event.preventDefault();
    const depositBalance = document.getElementById('depositBalance');
    const depositInputValue = parseFloat(depositBalance.value);

    // select current deposit balance
    const currentDeposit = document.querySelector('#deposit');
    // console.log(currentDeposit);
    const currentDepositInnerText = parseFloat(currentDeposit.innerText);

    const newDepositBalance = currentDepositInnerText + depositInputValue;
    currentDeposit.innerText = newDepositBalance;

    // Selected account balance
    const currentBalance = document.querySelector('#balance');
    const prevBalance = parseFloat(currentBalance.innerText);
    const totalBalance = prevBalance + depositInputValue;
    currentBalance.innerText = totalBalance;

    depositBalance.value = '';
});



// Select Withdraw button
const withdrawButton = document.getElementById('submitWithdrawBalance');
// console.log(withdrawButton);

withdrawButton.addEventListener('click', function (event) {
    // stop by default reload
    event.preventDefault();
    const withdrawBalanceInput = document.querySelector('#withdrawBalance');
    // console.log(withdrawBalance);
    const withdrawBalanceFloat = parseFloat(withdrawBalanceInput.value);
    // console.log(typeof withdrawBalanceFloat);


    // Select current balance 
    const currentBalance = document.querySelector('#balance');
    const currentBalanceInnerText = parseFloat(currentBalance.innerText);
    // console.log(typeof currentBalanceInnerText);
    const subtractionWithdrawCurrentBl = currentBalanceInnerText - withdrawBalanceFloat;
    currentBalance.innerText = subtractionWithdrawCurrentBl;


    // Selected withdrawn balance
    const withdrawnBalance = document.querySelector('#withdrawn');
    // console.log(withdrawnBalance);
    const prevWithdrawnBl = parseFloat(withdrawnBalance.innerText);
    const totalWithdrawnBl = prevWithdrawnBl + withdrawBalanceFloat;
    withdrawnBalance.innerText = totalWithdrawnBl;

    withdrawBalanceInput.value = '';
})