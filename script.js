// Simple Calculator Application

// Store the last operation performed
let lastOperation = null;

// Get all operation buttons
const operationButtons = document.querySelectorAll('.op-btn');
const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const resultDisplay = document.querySelector('#calc-result');

// Initialize result display
resultDisplay.textContent = '0';

/**
 * Performs the calculation based on the operation
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @param {string} operation - Operation to perform (+, -, *, /)
 * @returns {number|string} Result of the calculation or error message
 */
function calculate(num1, num2, operation) {
    try {
        // Validate inputs
        if (isNaN(num1) || isNaN(num2)) {
            return 'Invalid input';
        }

        let result;
        switch(operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    return 'Cannot divide by zero';
                }
                result = num1 / num2;
                break;
            default:
                return 'Invalid operation';
        }

        // Round to 10 decimal places to avoid floating point issues
        return Math.round(result * 10000000000) / 10000000000;
    } catch (error) {
        console.error('Calculation error:', error);
        return 'Error';
    }
}

/**
 * Updates the result display
 * @param {number|string} value - Value to display
 */
function updateResult(value) {
    resultDisplay.textContent = value.toString();
    
    // Add animation effect
    resultDisplay.classList.remove('updated');
    void resultDisplay.offsetWidth; // Trigger reflow
    resultDisplay.classList.add('updated');
}

/**
 * Handles the calculation when an operation button is clicked
 * @param {string} operation - The operation to perform
 */
function handleOperation(operation) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    // Check if inputs are valid
    if (num1Input.value === '' || num2Input.value === '') {
        updateResult('Please enter both numbers');
        return;
    }
    
    const result = calculate(num1, num2, operation);
    updateResult(result);
    
    // Store the last operation
    lastOperation = {
        num1: num1,
        num2: num2,
        operation: operation
    };
}

// Add click event listeners to all operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const operation = e.target.getAttribute('data-op');
        handleOperation(operation);
        
        // Visual feedback
        e.target.classList.add('active');
        setTimeout(() => {
            e.target.classList.remove('active');
        }, 200);
    });
});

// Add keyboard support for Enter key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        
        // If there's a last operation, repeat it with current values
        if (lastOperation) {
            const num1 = parseFloat(num1Input.value) || lastOperation.num1;
            const num2 = parseFloat(num2Input.value) || lastOperation.num2;
            
            // Update inputs if they were empty
            if (num1Input.value === '') num1Input.value = lastOperation.num1;
            if (num2Input.value === '') num2Input.value = lastOperation.num2;
            
            const result = calculate(num1, num2, lastOperation.operation);
            updateResult(result);
            
            // Update last operation with new values
            lastOperation.num1 = num1;
            lastOperation.num2 = num2;
            
            // Highlight the last used operation button
            const lastOpButton = document.querySelector(`button[data-op="${lastOperation.operation}"]`);
            if (lastOpButton) {
                lastOpButton.classList.add('active');
                setTimeout(() => {
                    lastOpButton.classList.remove('active');
                }, 200);
            }
        } else {
            updateResult('Please perform an operation first');
        }
    }
});

// Add input validation
[num1Input, num2Input].forEach(input => {
    input.addEventListener('input', (e) => {
        // Allow only valid number input
        const value = e.target.value;
        if (value !== '' && value !== '-' && isNaN(parseFloat(value))) {
            e.target.value = value.slice(0, -1);
        }
    });
});

// Clear result when inputs change
[num1Input, num2Input].forEach(input => {
    input.addEventListener('input', () => {
        if (resultDisplay.textContent !== '0' && resultDisplay.textContent !== 'Please enter both numbers') {
            resultDisplay.classList.remove('updated');
        }
    });
});