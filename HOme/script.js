function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultText = document.getElementById('result');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultText.innerText = "Please enter valid numbers.";
        return;
    }
    
    let result;
    switch(operation) {
        case '+': result = num1 + num2; resultText.innerText = `The sum of ${num1} and ${num2} is ${result}.`; break;
        case '-': result = num1 - num2; resultText.innerText = `The difference of ${num1} and ${num2} is ${result}.`; break;
        case '*': result = num1 * num2; resultText.innerText = `The product of ${num1} and ${num2} is ${result}.`; break;
        case '/': 
            if (num2 === 0) {
                resultText.innerText = "Cannot divide by zero.";
                return;
            }
            result = num1 / num2; 
            resultText.innerText = `The quotient of ${num1} and ${num2} is ${result}.`; 
            break;
        case '%': result = num1 % num2; resultText.innerText = `The remainder of ${num1} divided by ${num2} is ${result}.`; break;
    }
}