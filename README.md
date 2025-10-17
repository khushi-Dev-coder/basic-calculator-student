# Simple Calculator

## Overview
A clean, modern web-based calculator application that performs basic arithmetic operations with keyboard support.

## Features
- ✨ Basic arithmetic operations (addition, subtraction, multiplication, division)
- ⌨️ Full keyboard support
- 🎯 Press Enter to repeat the last operation
- 📱 Responsive design for mobile and desktop
- 🌙 Dark mode support (follows system preferences)
- ♿ Accessibility-friendly with ARIA labels
- 🎨 Modern, gradient-based UI with smooth animations
- ⚡ Error handling for invalid inputs and division by zero

## Usage

### Basic Operations
1. Enter two numbers in the input fields
2. Click one of the operation buttons (+, −, ×, ÷)
3. View the result in the result display

### Keyboard Shortcuts
- **Enter**: Repeat the last successful operation
- **+**: Perform addition
- **-**: Perform subtraction
- **\***: Perform multiplication
- **/**: Perform division

## Technical Details

### Technologies Used
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)

### Key Features Implementation
- **State Management**: Tracks the last operation for Enter key functionality
- **Error Handling**: Validates inputs and handles edge cases like division by zero
- **Floating Point Precision**: Rounds results to 10 decimal places to avoid floating point issues
- **Responsive Design**: Adapts layout for screens smaller than 480px
- **Accessibility**: ARIA labels and live regions for screen reader support
- **Performance**: Event delegation and efficient DOM manipulation

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Installation
1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process or dependencies required!

## Deployment
This application is designed to be deployed directly to GitHub Pages or any static hosting service.

## Error Handling
- Invalid number inputs
- Division by zero
- Empty input fields
- No previous operation for Enter key

## Future Enhancements
- [ ] Operation history
- [ ] Scientific calculator mode
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Calculation history export
- [ ] Theme customization

## License
MIT License - Feel free to use this calculator in your projects!

## Author
Created with ❤️ for modern web development