const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const nameValue = nameInput.value.trim();

  nameOutput.textContent = nameValue.length > 0 ? nameValue : 'Anonymous';
});
