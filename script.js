let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        if (!isValidInput(string)) {
          throw new Error("Invalid input");
        }
        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        displayError(error.message);
      }
    } else if (e.target.innerHTML === 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});

function isValidInput(input) {
  const regex = /^[0-9+\-*/. ]+$/;
  return regex.test(input);
}

function displayError(errorMessage) {
  document.querySelector('input').value = errorMessage;
}
