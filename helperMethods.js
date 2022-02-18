function fullNameCheck(inputElement) {
    const valid = isLengthValid(inputElement, 2, 100);
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = !valid;
}

function verifyForm() {
    const username = document.getElementById('username');
    const emailAddress = document.getElementById('emailAddress');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const isUsernameValid = isLengthValid(username, 4, 8);
    const isEmailAddressValid = isTextContains(emailAddress, "@");
    const isPasswordValid = isLengthValid(password, 5, 10) && isTextContains(password, "$");
    const isConfirmPasswordValid = confirmPassword.value === password.value;

    const submitButton = document.getElementById('submitButton');
    const valid = isUsernameValid && isEmailAddressValid && isPasswordValid && isConfirmPasswordValid
    submitButton.disabled = !valid;
}

function isTextContains(element, symbol) {
    return element.value.includes(symbol);
}

function isLengthValid(element, minLength, maxLength) {
    const length = element.value.length;
    return (length >= minLength) && (length <= maxLength);
}