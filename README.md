# calculator

This is a simple browser calculator made in vanilla JavaScript. Supports multiple equations.

# Under the hood and code structure

I used Factory Functions and the Module Pattern. The whole code is wrapped in a Module which has private and public methods, and the ladder gets returned and called;

Practiced DOM manipulation and key events. Especially challenging was implementing the shift key in combination with other keys for the operators.

# UI and styling

Simple UI with the calculator centered. Made use of the css grid with grid-template-areas to order the calculator's buttons

# Functionality

-custom made function for the operations (no eval() used!)

-full keyboard support: type operators and operands just like
you would as usual, using the numbers over the QWERTY, OR/AND the numpad. Press backspace, to delete the last digit, or delete to clear 
entry. Press enter to calculate the result:

    - shift * multiplication (or numpad *)
    - / (division)
    - shift + for addition (or numad +)
    - - (subtract)
    - shift ^ (power) 
    - n (factorial)

    Try it live here:  ivantbv.github.io/calculator/ 

# Things to improve
Implement media queries in the CSS file and make it mobile friendly
