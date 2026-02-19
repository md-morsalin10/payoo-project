document.getElementById('pay-bill-btn').addEventListener('click', function(){
    // 1. step get bank 
    const selectBankAcc = getValueFromInput('pay-bill-bank');
    // console.log(selectBankAcc)
    if(selectBankAcc === 'Select Bank'){
        alert('please Select a Bank account')
        return;
    }

    //2. get biller account
    const billerAccNumber = getValueFromInput('biller-number');
    // console.log(billerAccNumber)
    if(billerAccNumber.length !='11'){
        alert("Enter 11 digit Number")
        return;
    }
    //3 get amount 
    const payAmount = getValueFromInput('pay-amount');
    // console.log(payAmount)
    // get current balance
    const currentBalance = getBalance()
    // console.log(currentBalance)
    if(payAmount>currentBalance){
        alert('invalid balance');
        return
    }
    if(payAmount<=0){
        alert("please enter a valid amount")
    }
    const newBalance = Number(currentBalance)-Number(payAmount);
    // console.log("New balance", newBalance)

    // get the pin 
    const pin = getValueFromInput('pay-bill-pin');
    if(pin === '1234'){
        setBalance(newBalance)
        alert(`PayBill successful Pay amount- ${payAmount} TAKA to pay number- ${billerAccNumber} Your Remaining Balance-${newBalance} TAKA at-${new Date()}`)

        // get history container
        const history = document.getElementById('history-container');
        // create new div
        const newHistoryDiv = document.createElement('div')
        // set inner html
        newHistoryDiv.innerHTML=`
        PayBill successful Pay amount- ${payAmount} TAKA to pay number- ${billerAccNumber} Your Remaining Balance-${newBalance} TAKA at-${new Date()}
        `
        // append to history container
        history.append(newHistoryDiv);

    }
    else{
        alert("incorrect pin")
        return;
    }
    
})