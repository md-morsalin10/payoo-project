// Machine input
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// machine balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    return Number(balance)
}

// machine value set balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

// machine hide all show one 
function showOne(id){
    
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');
    const tHistory = document.getElementById('history');
    const transferMoney = document.getElementById('transfer-money');
    const bonusAdd = document.getElementById('get-bonus');
    // console.log(`add money- ${addMoney}, cashOut- ${cashOut}`)

// all hide 
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    tHistory.classList.add('hidden');
    transferMoney.classList.add('hidden');
    bonusAdd.classList.add('hidden');

    // clicked btn show means unhide

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');


}