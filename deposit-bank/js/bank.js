const depositBtn = document.querySelector('#deposit');

// Deposit Balance
depositBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const depositInputField = document.querySelector('#deposit-amount');
    // console.log(depositInputField);
    const previousDepositBalance = document.querySelector('#depositAmount');
    const prevBalance = parseFloat(previousDepositBalance.innerText);
    // console.log(prevBalance);
    const newDepositBalance = parseFloat(depositInputField.value);
    // console.log(newDepositBalance);
    const totalDepositBalance = prevBalance + newDepositBalance
    previousDepositBalance.innerText = totalDepositBalance;

    // update account balance 
    const currentAccountBalance = document.querySelector('#currentAmount');
    const currentAccountPrevBalance = currentAccountBalance.innerText;
    const currentTotalAccountBalance = parseFloat(currentAccountPrevBalance + totalDepositBalance);
    currentAccountBalance.innerText = currentTotalAccountBalance;

    depositInputField.value = '';
});

// Withdraw function
const withdrawBtn = document.querySelector('#withdraw');
// console.log(withdrawBtn);
withdrawBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const withdrawAmountInputField = document.querySelector('#withdraw-amount');
    const withdrawBalance = parseFloat(withdrawAmountInputField.value);
    // console.log(withdrawBalance);

    const currentAccountBalance = document.querySelector('#currentAmount');
    const prevBalance = parseFloat(currentAccountBalance.innerText);
    const totalAccountBalance = prevBalance - withdrawBalance;
    currentAccountBalance.innerText = totalAccountBalance;


    // withdraw 
    const currentWithdraw = document.querySelector('#withdrawAmount');
    const currentWithdrawPrevBalance = parseFloat(currentWithdraw.innerText);
    const withdrawPrevBalance = currentWithdrawPrevBalance + withdrawBalance;
    currentWithdraw.innerText = withdrawPrevBalance;
    withdrawAmountInputField.value = '';
})