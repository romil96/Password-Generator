const passwordInput = document.getElementById('password');
const copyBtn = document.getElementById('copyBtn');
const charRange = document.getElementById('charRange');
const charLengthText = document.getElementById('charLength');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const strengthText = document.getElementById('strength');

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
    let charSet = '';
    let password = '';
    const length = parseInt(charRange.value);

    if (uppercaseCheckbox.checked) charSet += UPPERCASE;
    if (lowercaseCheckbox.checked) charSet += LOWERCASE;
    if (numbersCheckbox.checked) charSet += NUMBERS;
    if (symbolsCheckbox.checked) charSet += SYMBOLS;

    if (charSet === '') return;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    passwordInput.value = password;
    updateStrength(length);
}

function updateStrength(length) {
    let strength = 0;

    if (uppercaseCheckbox.checked) strength++;
    if (lowercaseCheckbox.checked) strength++;
    if (numbersCheckbox.checked) strength++;
    if (symbolsCheckbox.checked) strength++;

    strength *= length / 8;

    strengthText.textContent = 'STRENGTH: ' + Math.min(4, Math.ceil(strength));
}

charRange.addEventListener('input', () => {
    charLengthText.textContent = charRange.value;
});

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    passwordInput.select();
    document.execCommand('copy');
});
