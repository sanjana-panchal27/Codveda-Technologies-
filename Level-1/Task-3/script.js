const countDisplay = document.getElementById('count-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
  // Disable decrement button if count is 0
  decrementBtn.disabled = count === 0;
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

// Initial display update
updateDisplay();
