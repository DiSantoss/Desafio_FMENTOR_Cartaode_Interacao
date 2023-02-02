
const buttons = document.querySelectorAll('button');
const initialColor = '';
const changeColor = 'hsl(25, 97%, 53%)';

function toggleColor() {
  if (this.style.backgroundColor === initialColor) {
    this.style.backgroundColor = changeColor;
  } else {
    this.style.backgroundColor = initialColor;
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.backgroundColor = initialColor;
  buttons[i].addEventListener('click', toggleColor);
}

