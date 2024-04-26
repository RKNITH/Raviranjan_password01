let inputSlider = document.getElementById("inputSlider");
let slidervalue = document.getElementById("slidervalue");
let passBox = document.getElementById("passBox");
let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let numbers = document.getElementById("number");
let symbols = document.getElementById("symbol");
let genBtn = document.getElementById("btn");
let copyIcon = document.getElementById("copyIcon");

slidervalue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    slidervalue.textContent = inputSlider.value;
});

function generatePassword() {
    const length = inputSlider.value;
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '@-*';
    let characters = '';
    let password = '';

    // Include selected character types
    if (lowerCase.checked) characters += lowercaseChars;
    if (upperCase.checked) characters += uppercaseChars;
    if (numbers.checked) characters += numberChars;
    if (symbols.checked) characters += symbolChars;

    // Generate password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
});


copyIcon.addEventListener('click', () => {
    if (passBox.value != '' || passBox.value.length > 0) {
        navigator.clipboard.writeText(passBox.value)
        copyIcon.innerText = 'check';
        copyIcon.title = 'Password Copied';

        setTimeout(() => {
            copyIcon.innerText = 'content_copy';
            copyIcon.title = '';
            passBox.value = ''


        }, 2000)
    }
})
