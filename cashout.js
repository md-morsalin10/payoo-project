document.getElementById("cashout-btn").addEventListener("click", function(){
    const cashOutNumber = getValueFromInput('cashout-number');
    console.log(cashOutNumber)
    if(cashOutNumber.length!='11'){
        alert('Invalid Number')
        return;
    }
    const cashOutAmount = getValueFromInput("cashout-amount");
    console.log(cashOutAmount)

    const currentBalance = getBalance()

    const newBalance = Number(currentBalance)-Number(cashOutAmount);
    console.log(newBalance)
    if(newBalance<=0){
        alert('Invalid balance')
        return;
    }

    const pin = getValueFromInput('cashout-pin')

    if(pin === '1234'){
        setBalance(newBalance)
        alert("Cash Out Successful")
          // 1 get history container
        const history = document.getElementById('history-container')
        // create new div
        const newHistory = document.createElement('div')
        // add inner html
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 ">
        Cash Out successful amount Number- ${cashOutAmount} TAKA to- ${cashOutNumber}  at ${new Date()}
        </div>
        `
        // append to 
        history.append(newHistory);
    }
    else{
        alert("Invalid Pin")
        return;
    }


})







// document.getElementById('cashout-btn').addEventListener('click', function () {
//     // 1. get the agent number 
//     const cashOutNumberInput = document.getElementById('cashout-number');
//     const cashOutNumber = cashOutNumberInput.value;
//     // console.log(cashOutNumber)
//     if(cashOutNumber.length != '11'){
//         alert("Invalid number")
//         return;
//     }

//     //    2. get the amount number 
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashOutAmount = cashoutAmountInput.value;
//     console.log(cashOutAmount)

//     //    get the balance 
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance)

//     const newBalance = Number(balance)-Number(cashOutAmount);
//     console.log(newBalance)

//     if(newBalance<=0 ){
//         alert('Invalid Balance')
//         return;
//     }

//     // get the pin number 
//     const pinInput = document.getElementById('cashout-pin');
//     const pin = pinInput.value;

//     if(pin === '1234'){
//         alert('Cash Out Successful')
//         balanceElement.innerText = newBalance;

//     }
//     else{
//         alert('Incorrect Pin Number')
//         return;
//     }



// })