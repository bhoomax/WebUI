function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let display = document.getElementById('display').innerText;
    document.getElementById('display').innerText = display.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('display').innerText += number;
}

function appendOperator(operator) {
    let display = document.getElementById('display').innerText;
    if (display.length > 0 && !isNaN(display.slice(-1))) {
        document.getElementById('display').innerText += operator;
    }
}

function appendDot() {
    let display = document.getElementById('display').innerText;
    if (!display.includes('.')) {
        document.getElementById('display').innerText += '.';
    }
}

function calculate() {
    let display = document.getElementById('display').innerText;
    if (display.length > 0) {
        document.getElementById('display').innerText = eval(display);
    }
}
