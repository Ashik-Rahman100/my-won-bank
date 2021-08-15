// deposite button event handler
document.getElementById('deposit-btn').addEventListener('click',function(){
    // update deposit total
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmountText = totalDeposit.innerText ;
    const previousDepositAmount = parseFloat(previousDepositAmountText)

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    totalDeposit.innerText = newDepositTotal;

    // update account Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear input 
    depositInput.value = '';

});

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotal.innerText = newWithdrawTotal;

    //  update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //  clear withdraw input
    withdrawInput.value = '';

})