const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
let currentInput = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.value;
        
        if (value === 'C') {
            currentInput = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput);
            } catch (error) {
                currentInput = 'Error';
            }
        } else {
            currentInput += value;
        }
        
        input.value = currentInput;
    });
});
