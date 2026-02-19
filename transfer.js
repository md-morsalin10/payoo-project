document.getElementById('transfer-btn').addEventListener('click', function(){

    // 1. get the transfer number
    const transferNumber = getValueFromInput('transfer-number');
    console.log(transferNumber)
    if(transferNumber.length!='11'){
        alert('Invalid number')
        return;
    }

    // 2. get amount 
    const transferAmount = getValueFromInput('transfer-amount');
    console.log(transferAmount)

    // get current balance from machine js
    const currentBalance = getBalance();

    const newBalance = Number(currentBalance)- Number(transferAmount)
    console.log(newBalance)

    // 4. get the 

    const transferPin = getValueFromInput('transfer-pin');
    if(transferPin === '1234'){
        setBalance(newBalance)
        alert("Transfer money Successful")
         const history = document.getElementById('history-container')
        // create new div
        const newHistory = document.createElement('div')
        // add inner html
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 ">
        Transfer successful Transfer Amount- ${transferAmount} TAKA to Transfer number- ${transferNumber}  at ${new Date()}
        </div>
        `
        // append to 
        history.append(newHistory);
      
    }
    else{
        alert('Invalid Pin')
        return;
    }


    
})