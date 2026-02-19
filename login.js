// console.log("login it")
document.getElementById("login-btn").addEventListener('click', function(){
    // console.log('clicked')
    //1. get the number 
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber)
    //2. get the pin 
    const pinNumber = document.getElementById('input-pin');
    const pin = pinNumber.value;
    console.log(pin)
    // 3. condition match 
    if(contactNumber=='01842007859' && pin == '1234'){
        alert('Login Successful')
        
        // window.location.replace("/home.html")
        window.location.assign("./home.html")
    }
    else{
        alert('Login Failed')
        return;
    }
})