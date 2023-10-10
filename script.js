// Select the button for changing the color
let btnColorChange = document.querySelector(".colorDefine");

// Select the element for changing the color
let colorChange = document.querySelector(".colorChange");

// Array of available colors in the color palette
const colorPalette = [
    'red',
    'green',
    'blue',
    'purple',
    'yellow',
    'pink',
    'orange',
    'cyan',
    'violet',
    'gold'
];

// Add hover effect to the colorChange element
colorChange.addEventListener('mouseover', () => {
    colorChange.style.transform = 'scale(1.1)';
    colorChange.style.transition = 'transform 0.3s';
});

colorChange.addEventListener('mouseout', () => {
    colorChange.style.transform = 'scale(1)';
});

// Add a click event listener to the color change button
btnColorChange.addEventListener('click', () => {
    // Generate a random index to select a color from the palette
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    
    // Get the randomly selected color from the palette
    const selectedColor = colorPalette[randomIndex];

    // Apply a transition animation when changing the background color
    colorChange.style.transition = 'background-color 0.5s ease-in-out';
    colorChange.style.backgroundColor = selectedColor;

    // Reset the transition after a brief delay
    setTimeout(() => {
        colorChange.style.transition = 'none';
    }, 500);
});

// Select the button for changing the shape
let btnShapeChange = document.querySelector(".shapeDefine");

// Select the element for changing the shape
let shapeChange = document.querySelector(".shapeChange");

// Array of available shape options
const shapes = ['triangle', 'square', 'circle', 'rectangle', 'diamond'];

// Add a click event listener to the shape change button
btnShapeChange.addEventListener('click', () => {
    // Generate a random index to select a shape from the available shapes
    const randomIndex = Math.floor(Math.random() * shapes.length);

    // Get the randomly selected shape
    const selectedShape = shapes[randomIndex];

    // Set the clip path and border radius based on the selected shape
    shapeChange.style.clipPath = getClipPathForShape(selectedShape);
    shapeChange.style.borderRadius = getBorderRadiusForShape(selectedShape);
});

// Function to get the clip path for a given shape
function getClipPathForShape(shape) {
    switch (shape) {
        case 'triangle':
            return 'polygon(50% 0%, 0% 100%, 100% 100%)';
        case 'square':
            return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
        case 'circle':
            return 'circle(50% at 50% 50%)';
        case 'rectangle':
            return 'polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%)';
        case 'diamond':
            return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
        default:
            return '';
    }
}

// Function to get the border radius for a given shape (used for circle)
function getBorderRadiusForShape(shape) {
    return shape === 'circle' ? '50%' : '0%';
}
