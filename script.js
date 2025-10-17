/**
 * Simple Calculator Application
 * Handles basic arithmetic operations with keyboard support
 */

(function() {
    'use strict';

    // State management
    let lastOperation = null;
    
    // Cache DOM elements
    const num1Input = document.querySelector('#num1');
    const num2Input = document.querySelector('#num2');
    const resultDisplay = document.querySelector('#calc-result');
    const operationButtons = document.querySelectorAll('button[data-op]');
    
    /**
     * Performs calculation based on the operation
     * @param {number} a - First operand
     * @param {number} b - Second operand
     * @param {string} operation - Mathematical operation (+, -, *, /)
     * @returns {number|string} Calculation result or error message
     */
    function calculate(a, b, operation) {
        // Input validation
        if (isNaN(a) || isNaN(b)) {
            return 'Error: Invalid input';
        }
        
        switch(operation) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) {
                    return 'Error: Division by zero';
                }
                return a / b;
            default:
                return 'Error: Invalid operation';
        }
    }
    
    /**
     * Formats the result for display
     * @param {number|string} result - Calculation result
     * @returns {string} Formatted result
     */
    function formatResult(result) {
        if (typeof result === 'string') {
            return result; // Error message
        }
        
        // Round to 10 decimal places to avoid floating point issues
        if (!Number.isInteger(result)) {
            result = Math.round(result * 10000000000) / 10000000000;
        }
        
        return result.toString();
    }
    
    /**
     * Performs the calculation and updates the display
     * @param {string} operation - Mathematical operation
     */
    function performCalculation(operation) {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        
        // Check if inputs are empty
        if (num1Input.value === '' || num2Input.value === '') {
            resultDisplay.textContent = 'Error: Please enter both numbers';
            resultDisplay.classList.add('error');
            return;
        }
        
        const result = calculate(num1, num2, operation);
        const formattedResult = formatResult(result);
        
        // Update display
        resultDisplay.textContent = formattedResult;
        
        // Add error class if result is an error
        if (typeof result === 'string' && result.startsWith('Error')) {
            resultDisplay.classList.add('error');
        } else {
            resultDisplay.classList.remove('error');
            lastOperation = operation; // Store last successful operation
        }
        
        // Add animation
        resultDisplay.classList.add('animate');
        setTimeout(() => {
            resultDisplay.classList.remove('animate');
        }, 300);
    }
    
    /**
     * Handles operation button clicks
     * @param {Event} event - Click event
     */
    function handleOperationClick(event) {
        const operation = event.currentTarget.getAttribute('data-op');
        performCalculation(operation);
        
        // Visual feedback
        event.currentTarget.classList.add('active');
        setTimeout(() => {
            event.currentTarget.classList.remove('active');
        }, 200);
    }
    
    /**
     * Handles keyboard events
     * @param {KeyboardEvent} event - Keyboard event
     */
    function handleKeydown(event) {
        // Enter key to repeat last operation
        if (event.key === 'Enter') {
            event.preventDefault();
            
            if (lastOperation) {
                performCalculation(lastOperation);
                
                // Visual feedback for the corresponding button
                const button = document.querySelector(`button[data-op="${lastOperation}"]`);
                if (button) {
                    button.classList.add('active');
                    setTimeout(() => {
                        button.classList.remove('active');
                    }, 200);
                }
            } else {
                resultDisplay.textContent = 'Error: No previous operation';
                resultDisplay.classList.add('error');
            }
        }
        
        // Direct operation keys
        const operationMap = {
            '+': '+',
            '-': '-',
            '*': '*',
            '/': '/'
        };
        
        if (operationMap[event.key]) {
            performCalculation(operationMap[event.key]);
            
            // Visual feedback
            const button = document.querySelector(`button[data-op="${operationMap[event.key]}"]`);
            if (button) {
                button.classList.add('active');
                setTimeout(() => {
                    button.classList.remove('active');
                }, 200);
            }
        }
    }
    
    /**
     * Initialize the calculator
     */
    function init() {
        // Set initial result display
        resultDisplay.textContent = '0';
        
        // Attach event listeners to operation buttons
        operationButtons.forEach(button => {
            button.addEventListener('click', handleOperationClick);
        });
        
        // Attach keyboard event listener
        document.addEventListener('keydown', handleKeydown);
        
        // Clear error state when typing in inputs
        [num1Input, num2Input].forEach(input => {
            input.addEventListener('input', () => {
                resultDisplay.classList.remove('error');
            });
        });
        
        // Allow Enter key in input fields to trigger last operation
        [num1Input, num2Input].forEach(input => {
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    if (lastOperation) {
                        performCalculation(lastOperation);
                    }
                }
            });
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();