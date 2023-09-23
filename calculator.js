let currentInput = '';
let currentResult = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        currentResult = eval(currentInput);
        document.getElementById('result').value = currentResult;
        currentInput = currentResult.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}
