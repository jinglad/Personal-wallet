// Login Button Event Handler
document.getElementById('login').addEventListener('click',function(){
    const loginArea = document.getElementById('login-bx');
    loginArea.style.display = "none";
    const transectionArea = document.getElementById('transection-area');
    transectionArea.style.display = "block";
})

// Deposit Button Event Handler
document.getElementById('deposit').addEventListener('click',function(){
    const depositNumber = getInput('depositAmount')

    updateSpanText('currentDeposit',depositNumber);

    updateSpanText('currentBalance',depositNumber);

    document.getElementById('depositAmount').value = "";
})

// Withdraw Button Event Handler
document.getElementById('withdraw').addEventListener('click',function(){
    const withdrawNumber = getInput('withdrawAmount');

    updateSpanText('currentWithdraw',withdrawNumber);

    updateSpanText('currentBalance',(-1)*withdrawNumber);

    document.getElementById('withdrawAmount').value = "";
    
})

function getInput(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id,addedNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + addedNumber;
    document.getElementById(id).innerText = total;
}