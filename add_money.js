document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1 get bank account
    const bankAccount = getValueFromInput("add-money-bank");
    console.log(bankAccount)
    if (bankAccount === "Select Bank") {
        alert("Please Select a Bank Account")
        return;

    }

    // 2. get acc no 
    const accno = getValueFromInput('add-money-number');
    if (accno.length != '11') {
        alert("Enter 11 digit acc Number");
        return;
    }

    // 3. get amount
    const amount = getValueFromInput('add-money-amount');
    const currentBalance = getBalance()
    const newBalance = currentBalance + Number(amount)
    console.log(newBalance)

    // 4 get the pin 
    const pin = getValueFromInput('add-money-pin')
    if (pin == '1234') {
        setBalance(newBalance);
        alert(`add money successful from ${bankAccount} at ${new Date()}`)

        // 1 get history container
        const history = document.getElementById('history-container')
        // create new div
        const newHistory = document.createElement('div')
        // add inner html
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 ">
        add money successful from- ${bankAccount} account number- ${accno} at ${new Date()}
        </div>
        `
        // append to 
        history.append(newHistory);
    }
    else {
        alert("Invalid Pin")
        return;
    }


})