
function generateRandomPin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

function generatePin() {
    const pin = generateRandomPin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        return generatePin();
    }
}



document.getElementById('generate-pin').addEventListener('click', function () {
    const finalPin = generatePin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = finalPin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const level = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(level)) {
        if (level === 'C') {
            typedNumberField.value = '';
        }
        else if (level === '<') {
            const digit = previousTypedNumber.split('');
            digit.pop();
            const remainingDigit = digit.join('');
            typedNumberField.value = remainingDigit;
        }
    }
    else {

        const newTypedNumber = previousTypedNumber + level;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (typedNumber === currentPin) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';

    }
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})

