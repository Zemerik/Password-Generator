document.addEventListener('DOMContentLoaded', function () {
    const lengthInput = document.getElementById('length');
    const useNumbersInput = document.getElementById('useNumbers');
    const useLettersInput = document.getElementById('useLetters');
    const useSymbolsInput = document.getElementById('useSymbols');
    const includeCustomInput = document.getElementById('includeCustom');
    const excludeCustomInput = document.getElementById('excludeCustom');
    const generateButton = document.getElementById('generate');
    const passwordInput = document.getElementById('password');
    const copyButton = document.getElementById('copy');

    generateButton.addEventListener('click', generatePassword);

    function generatePassword() {
        const length = parseInt(lengthInput.value);
        const useNumbers = useNumbersInput.checked;
        const useLetters = useLettersInput.checked;
        const useSymbols = useSymbolsInput.checked;
        const includeCustom = includeCustomInput.value;
        const excludeCustom = excludeCustomInput.value;

        const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' +
            '`~!@#$%^&*()-_+=[]{}|;:,.<>?';

        let validChars = '';
        let password = '';

        if (useNumbers) validChars += '0123456789';
        if (useLetters) validChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (useSymbols) validChars += '`~!@#$%^&*()-_+=[]{}|;:,.<>?';
        if (includeCustom) validChars += includeCustom;

        for (let i = 0; i < length; i++) {
            let char = getRandomChar(validChars);
            while (excludeCustom.includes(char)) {
                char = getRandomChar(validChars);
            }
            password += char;
        }

        passwordInput.value = password;
    }

    copyButton.addEventListener('click', function () {
        passwordInput.select();
        document.execCommand('copy');
        alert('Password copied to clipboard');
    });

    function getRandomChar(chars) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        return chars.charAt(randomIndex);
    }
});

