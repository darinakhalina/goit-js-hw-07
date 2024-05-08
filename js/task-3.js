const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const defaultText = output.innerText;

input.addEventListener('input', event => {
  const inputValue = event.currentTarget.value.trim();
  output.textContent = inputValue || defaultText;
});
