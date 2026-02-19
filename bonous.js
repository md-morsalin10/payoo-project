document.getElementById('bonus-btn').addEventListener('click', function(){
    const couponBonus = getValueFromInput('bonus-input')
    const currentBalance = getBalance()
    if(couponBonus === 'morsalin'){
        
        const newBalance = Number(currentBalance)  + Number(500) ;
        setBalance(newBalance)
        alert(`500 Taka Bonus Added New Balance-${newBalance} TAKA at ${new Date()}`)

         const history = document.getElementById('history-container')
        // create new div
        const newHistory = document.createElement('div')
        // add inner html
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 ">
        500 TK Bonus added successful New Balance- ${newBalance} TAKA  to at- ${new Date()}
        </div>
        `
        // append to 
        history.append(newHistory);
    }
    else{
        alert("Invalid Coupon")
        return;
    }
    
})