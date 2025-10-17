# Simple Calculator

A clean, modern web-based calculator application with keyboard support.

## Features

- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), and Division (÷)
- **Keyboard Support**: Press Enter to repeat the last operation
- **Input Validation**: Handles invalid inputs gracefully
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Visual Feedback**: Animated results and button interactions
- **Error Handling**: Proper handling of edge cases like division by zero

## Usage

1. Enter two numbers in the input fields
2. Click one of the operation buttons (+, -, ×, ÷)
3. View the result in the result display area
4. Press Enter to repeat the last operation with current values

## Technical Details

### Structure
- `index.html` - Main HTML structure with semantic elements
- `script.js` - JavaScript logic for calculations and interactions
- `style.css` - Modern, responsive styling with animations

### Key Features Implementation

- **Last Operation Memory**: The calculator remembers the last operation performed
- **Keyboard Support**: Enter key triggers the last operation
- **Input Validation**: Only allows valid numeric input
- **Floating Point Precision**: Rounds results to avoid floating point issues
- **Accessibility**: Proper ARIA labels for screen readers

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This application is ready for deployment to GitHub Pages or any static hosting service.

### GitHub Pages Deployment

1. Push the code to a GitHub repository
2. Go to Settings > Pages
3. Select the branch and folder
4. The app will be available at `https://[username].github.io/[repository-name]/`

## Development

No build process required. Simply open `index.html` in a web browser to run the application locally.

## License

MIT License - Feel free to use and modify as needed.