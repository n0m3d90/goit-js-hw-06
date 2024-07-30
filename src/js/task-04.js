'use strict'

let counterValue = 0;

const valueEl = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const updateCounterUI = () => {
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterUI();
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateCounterUI();
});
