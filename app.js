function getPin() {
    const pin = pinGenerate();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin
    }
    else{
        return getPin()
    }
}
function pinGenerate(params) {
    const random  = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    const displayPin = document.getElementById('display-pin')
    displayPin.value = pin
})
document.getElementById('calculate').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumberFiled = document.getElementById('type-number');
    const previousNumber = typeNumberFiled.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberFiled.value  = ''
        }
        else if(number === '<'){
            const digits = previousNumber.split('')
            digits.pop();
            const remainingDigits = digits.join('') ;
            typeNumberFiled.value = remainingDigits;
        }
    }
    else{
        
        const newNumber = previousNumber + number;
        typeNumberFiled.value = newNumber 

    }
})
document.getElementById('btn-submit').addEventListener('click',function(){
    const displayPin = document.getElementById('display-pin');
    const currentPin = displayPin.value;

    const typeNumberFiled = document.getElementById('type-number')
    const currentTypePin = typeNumberFiled.value;
    const success = document.getElementById('pin-success')
    const wrong = document.getElementById('pin-wrong');
    if(currentTypePin === currentPin){
        success.style.display = 'block';
        wrong.style.display = 'none'
    }
    else{
        wrong.style.display = 'block'
        success.style.display = 'none';
    }
})