const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

// Function to create the grid
function createGrid(size) {
  container.innerHTML = ''; // Clear existing grid
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.classList.add('square');
    container.appendChild(square);
  }

  // Add hover effect
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });
  });
}

// Initial grid setup
createGrid(16);

// Handle button click for new grid
resetButton.addEventListener('click', () => {
  let size = parseInt(prompt('Enter the number of squares per side (max 100):'));
  if (size > 100 || size <= 0 || isNaN(size)) {
    alert('Please enter a valid number between 1 and 100.');
  } else {
    createGrid(size);
  }
});
